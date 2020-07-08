import React , {useEffect} from 'react';
import {useMutation,gql} from '@apollo/client';
import NoteForm from '../components/NoteText';
import {NEW_NOTE} from '../gql/mutation';
import {GET_NOTES,GET_MY_NOTES} from '../gql/query';




const NewNote = (props)=>{

    const [data,{loading,error}] = useMutation(NEW_NOTE, {
        refetchQueries:[{query:GET_NOTES},{query:GET_MY_NOTES}],
        onCompleted: data =>{
            props.history.push(`note/${data.CreateNote.id}`)
        }
    })


    return (
        <React.Fragment>
             {loading && (<div className="ui icon message">
            <i className="notched circle loading icon"></i>
            <div className="content">
              <div className="header">
                Just one second
              </div>
              <p>We're fetching that content for you.</p>
            </div>
          </div>)}
                {error && (<div className="ui negative message">
                <i className="close icon"></i>
                <div className="header">
                    Error loading the document
                </div>
                <p>fetch error
            </p>
          </div>)}
    
    
            <NoteForm
            action={data} 
            />

        </React.Fragment>
        )
}


export default NewNote;