import React , {useState} from 'react'
import ReactMarkdown from 'react-markdown';
import {useQuery} from '@apollo/client';

import NoteUser from './NoteUser'
import {IS_LOGGED_IN, GET_ME} from '../gql/query'


const Note = ({note})=>{

    const {data,loading,error} = useQuery(IS_LOGGED_IN)



    return(
      <div className="event">
              <div className="label">
                <img src={note.author.avatar} style={{borderRadius:"50%"}}/>
              </div>
              <div className="content">
                <div className="summary">
                  <a className="user">
                    {note.author.username}
                  </a>
                  <div className="date">
                  <i className="clock icon"></i>{note.createdAt}
                  </div>
                </div>
                <ReactMarkdown source={note.content} />
                <div className="meta">
                  {data.isLoggedIn===false && (
                    <div className="ui labeled button" tabIndex="0">
                        <div className="ui button">
                          <i className="heart icon"></i>{note.favoriteCount}
                        </div>
                    </div>
                  )}
                  {data.isLoggedIn ===true&&(
                    <NoteUser note={note}/>)}
                </div>
              </div>{' '}
              <br></br>
          </div>
    )
  
  }

  export default Note
    
     
  