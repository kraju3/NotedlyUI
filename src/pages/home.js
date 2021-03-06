import {useQuery,gql} from '@apollo/client';
import React, { useState } from 'react'
import NoteFeed from '../components/NoteFeed';
import {GET_NOTES} from '../gql/query'



 const Home = ()=>{
     const {data,loading,error,fetchMore} = useQuery(GET_NOTES);
  
     if (loading) return(
      <div className="ui icon message">
      <i className="notched circle loading icon"></i>
      <div className="content">
        <div className="header">
          Just one second
        </div>
        <p>We're fetching that content for you.</p>
      </div>
    </div>
     )

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


