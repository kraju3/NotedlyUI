import {useQuery,gql} from '@apollo/client';
import React, { useState } from 'react'
import NoteFeed from '../components/NoteFeed';

const GET_NOTES = gql`
query noteFeed($cursor:String){
  noteFeed(cursor: $cursor){
      cursor
      hasNextPage
      notes{
        id
        createdAt
        content
        favoriteCount
        author{
          username
          id
          avatar
        }
      }
    }
  }
  `;

 const Home = ()=>{
     const {data,loading,error,fetchMore} = useQuery(GET_NOTES);
  
     if (loading) return <h2>Loading...</h2>;

     if (error) return <h2>Error!</h2>

     const onLoadMore = ()=>{
       fetchMore({
         query:GET_NOTES,
         variables:{cursor:data.noteFeed.cursor},
         updateQuery:(previousResult,{fetchMoreResult})=>{
            const prevEntry = previousResult.noteFeed
            const newNotes = fetchMoreResult.noteFeed
            const newCursor = fetchMoreResult.noteFeed.cursor;
            const hasNextPage = fetchMoreResult.noteFeed.hasNextPage
           return {
             noteFeed:{
              cursor:newCursor,
              hasNextPage,
              notes:[
                ...prevEntry.notes,
                ...newNotes.notes
              ],
              __typename:'noteFeed'
             }
            };
           }
       })
     }
     return(
         <div>
            <br></br>
            <br></br>
            <NoteFeed notes={data.noteFeed.notes}/>
            {data.noteFeed.hasNextPage && (
              <button className="fluid ui button ui labeled icon button" onClick ={onLoadMore}>
              See More
              <i className="down chevron icon"/>
          </button>
            )}
            
         </div>
     )
 } 

export default Home


