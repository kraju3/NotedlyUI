import React from 'react'
import ReactMarkdown from 'react-markdown'

class Note extends React.Component{
  
    constructor(props){
        super(props)
        this.state = {
            favoriteCount:this.props.favoriteCount
        }
    }

    render(){
        return(
        <div className="event">
            <div className="label">
              <img src={this.props.author.avatar}/>
            </div>
            <div className="content">
              <div className="summary">
                <a className="user">
                  {this.props.author.username}
                </a>
                <div className="date">
                  {this.props.createdAt}
                </div>
              </div>
              <ReactMarkdown source={this.props.content} />
              <div className="meta">
                <a className="like">
                  <i className="like icon"></i> {this.props.favoriteCount} Likes
                </a>
              </div>
            </div>{' '}
            <br></br>
        </div>
        
        )
    }
}


export default Note

