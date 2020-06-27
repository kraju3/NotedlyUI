import React from 'react'
import ReactMarkdown from 'react-markdown';
import {format} from 'date-fns';
import styled from 'styled-components'

const NoteWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  margin-bottom: 2em;
  padding-bottom: 2em;
  border-bottom: 1px solid #f5f4f0;`

const NoteFeed = ({notes}) =>{
  return(
    <div>
      {notes.map(note=>{
        return(
      <NoteWrapper key = {note.id}>
        <Note
          key ={note.id}
         note ={note}
         />
      </NoteWrapper>
        )
      })}
    </div>
  )
}

const Note = ({note})=>{
  return(
    <div className="event">
            <div className="label">
              <img src={note.author.avatar}/>
            </div>
            <div className="content">
              <div className="summary">
                <a className="user">
                  {note.author.username}
                </a>
                <div className="date">
                  {note.createdAt}
                </div>
              </div>
              <ReactMarkdown source={note.content} />
              <div className="meta">
                <a className="like">
                  <i className="like icon"></i> {note.favoriteCount} Likes
                </a>
              </div>
            </div>{' '}
            <br></br>
        </div>
  )

}
  
   


export default NoteFeed

