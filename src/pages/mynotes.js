import React,{useEffect} from 'react'
import {useQuery} from '@apollo/client';
import {GET_MY_NOTES} from '../gql/query'
import NoteFeed from '../components/NoteFeed'


const Notes = ()=>{

    useEffect(()=>{
        document.title = "My Notes - Notedly"
    })

    const {data,loading,error} = useQuery(GET_MY_NOTES)
    
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
  if(data.me.notes.length!==0){
    return(
        
      <NoteFeed
         notes={data.me.notes}
         />

 )
  }
  else{
    return <h2>No notes yet</h2>
  }

}

export default Notes