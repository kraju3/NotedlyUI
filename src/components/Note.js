import React from 'react'
import ReactMarkdown from 'react-markdown';

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

  export default Note
    
     
  