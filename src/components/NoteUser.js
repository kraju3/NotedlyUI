import React from 'react';
import {useQuery,gql} from '@apollo/client';
import {Link} from 'react-router-dom';
import { GET_ME } from '../gql/query';

import FavoriteNote from './FavoriteNote';
import DeleteNote from './DeleteNote'

const NoteUser = (props)=>{
    const {data,loading,error} = useQuery(GET_ME);

    if (loading) return (<div className="ui icon message">
    <i className="notched circle loading icon"></i>
    <div className="content">
      <div className="header">
        Just one second
      </div>
      <p>We're fetching that content for you.</p>
    </div>
  </div>)


if (error) return (<div className="ui negative message">
    <i className="close icon"></i>
    <div className="header">
        Error loading the document
    </div>
    <p>fetch error
</p>
</div>)



    return (
    <React.Fragment>
        <FavoriteNote
        me={data.me} 
        note={props.note}/>
        {data.me.id ===props.note.author.id &&(
        <React.Fragment>

            <Link to={`/edit/${props.note.id}`}>
                <button className="ui secondary button">
                <i class="edit icon"></i>Edit
                </button>
            </Link>
                <DeleteNote noteId={props.note.id}/>
        </React.Fragment>
          
        ) }
        
    </React.Fragment>)
}

export default NoteUser