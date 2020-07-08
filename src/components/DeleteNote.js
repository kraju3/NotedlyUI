import React from 'react';
import {useMutation} from '@apollo/client';
import {withRouter} from 'react-router-dom';
import {DELETE_NOTE} from '../gql/mutation'
import { GET_MY_NOTES, GET_NOTES } from '../gql/query';


const DeleteNote = (props)=>{
    const [deleteNote,{loading,error}]= useMutation(DELETE_NOTE,{
        variables:{
            id:props.noteId
        },
        refetchQueries:[{query:GET_MY_NOTES},{query:GET_NOTES}],
        onCompleted:(data)=>{
            console.log(data)
            props.history.push('/mynotes')
        }
    })


    if (loading) return (<div className="ui icon message">
    <i className="notched circle loading icon"></i>
    <div className="content">
      <div className="header">
        Just one second
      </div>
      <p>Deleting that note for you.</p>
    </div>
  </div>)


    if (error) return (<div className="ui negative message">
        <i className="close icon"></i>
        <div className="header">
            Error deleting the Note
        </div>
        <p>{console.log(error)}
    </p>
    </div>)

    return (
        <button className="negative ui button" onClick={deleteNote}>
            <i class="trash icon"></i>Delete

        </button>
    )
}

export default withRouter(DeleteNote);