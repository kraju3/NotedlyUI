import React , {useState} from 'react'
import ReactMarkdown from 'react-markdown';
import {useQuery} from '@apollo/client';

import NoteUser from './NoteUser'
import {IS_LOGGED_IN, GET_ME} from '../gql/query'

const Note = ({note})=>{
    const [favorite,setFavorite] = useState(note.favoriteCount)
    const [liked_disliked,setLike] = useState(false)
    const {data,loading,error} = useQuery(IS_LOGGED_IN)
    const {data: userData} =useQuery(GET_ME) 

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
                  {/* <a className="like">
                    <i className="like icon"></i> {note.favoriteCount} Likes
                  </a> */}
                  <div className="ui labeled button" tabIndex="0">
                    <div className="ui button" onClick={(e)=>{
                      e.preventDefault()
                      if (liked_disliked){
                        setFavorite(favorite-1)
                        setLike(false)
                      }else{
                        setFavorite(favorite+1)
                        setLike(true)
                      }

                    }}>
                      <i className="heart icon"></i> Like
                    </div>
                    <a className="ui basic label">
                      {favorite}
                    </a>
                  </div>
                  {data.isLoggedIn ===true&&(
                    <NoteUser note={note}/>)}
                </div>
              </div>{' '}
              <br></br>
          </div>
    )
  
  }

  export default Note
    
     
  