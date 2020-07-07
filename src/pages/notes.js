import React from 'react';
import {useQuery,gql} from '@apollo/client'
import Note from '../components/Note'
import {NOTE_QUERY} from '../gql/query'


const NotePage = props =>{
    const id = props.match.params.id 
    const {loading,error,data} = useQuery(NOTE_QUERY,{variables:{id}})

    if (error) return <p>Error! Note not found</p>
    if (loading) return <p>Loading..</p>



    return (
       <Note note={data.note}/>
    )
}



export default NotePage;