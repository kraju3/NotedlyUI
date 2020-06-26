import {useQuery,gql} from '@apollo/client';
import React, { useState } from 'react'
import Note from '../components/Note'

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


     const ListofNotes = data.noteFeed.notes.map(note=>{
         return (
             <Note
             key={note.id}
             id = {note.id}
             createdAt = {note.createdAt}
             content = {note.content}
             favoriteCount = {note.favoriteCount}
             author ={note.author}
             />
         )
     })
     return(
         <div>
             <br></br>
             <br></br>
            {ListofNotes}
         </div>
     )
 } 

export default Home



