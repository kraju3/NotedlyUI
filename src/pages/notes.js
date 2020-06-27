import React from 'react';
import {useQuery,gql} from '@apollo/client'
import Note from '../components/Note'


const NOTE_QUERY = gql`
    query note($id: String!) {
        note(id:$id){
            id
            createdAt
            content
            favoriteCount
            author {
                username
                id
                avatar
            }
        }
    }
`

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