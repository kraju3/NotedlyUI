import React from 'react';
import {useQuery,useMutation,ql} from '@apollo/client'
import NoteForm from '../components/NoteText'
import {NOTE_QUERY,GET_ME} from '../gql/query'
import {UPDATE_NOTE} from '../gql/mutation'
import { Redirect } from 'react-router-dom';


const EditPage = props =>{
    const id = props.match.params.id 
    const {data: userData} = useQuery(GET_ME)
    const {loading,error,data} = useQuery(NOTE_QUERY,{variables:{id}})

    const [updateNote] =useMutation(UPDATE_NOTE,{
        variables: {
            id,
        },
        onCompleted:()=>{
            props.history.push(`/note/${id}`)
        }
    })
    console.log(userData)

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


    if(userData.me.id!==data.note.author.id) {
        return (<div className="ui negative message">
        <i className="close icon"></i>
        <div className="header">
            Error 
        </div>
        <p>You do not have permission to edit this
    </p>
    <Redirect to={{pathname:"/home"}} />
    </div>

     )
    }


    return (
       <NoteForm content={data.note.content}  action={updateNote}/>
    )
}



export default EditPage;