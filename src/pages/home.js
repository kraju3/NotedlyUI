import {useQuery,gql} from '@apollo/client';
import React, { useState } from 'react'
import NoteFeed from '../components/Note';

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
           if(data.noteFeed.hasNextPage){
            const prevEntry = previousResult.noteFeed
            console.log(prevEntry)
            const newNotes = fetchMoreResult.noteFeed
            console.log(newNotes)
            const newCusor = fetchMoreResult.noteFeed.cursor;
            const nextPage = fetchMoreResult.noteFeed.hasNextPage;
           return {
             cursor:newCusor,
             hasNextPage:nextPage,
             entry:{
               data:{...newNotes,...prevEntry}
             },
             __typename:prevEntry.__typename

           }
           }
           

         }
       })
     }
     return(
         <div>
            <br></br>
            <br></br>
            <NoteFeed notes={data.noteFeed.notes}/>
            <nav aria-label="Page navigation example">
              <ul className="pagination">
                <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                <li className="page-item"><a className="page-link" href="#" onClick={onLoadMore}>Next</a></li>
              </ul>
            </nav>
         </div>
     )
 } 

export default Home



