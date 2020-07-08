import {gql} from '@apollo/client';

const SIGNIN_USER = gql`
mutation signIn($username:String!,$email:String,$password:String!){
    signIn(username:$username,email:$email,password:$password) 
}
`

const SIGNUP_USER = gql`
mutation signUp($firstname:String!,$lastname:String!,$email:String!,$username:String!,$password:String!){
    signUp(firstname:$firstname,lastname:$lastname,email:$email,username:$username,password:$password) 
}
`

const NEW_NOTE = gql`
    mutation CreateNote($content: String!){
        CreateNote(content:$content) {
            id
            content
            createdAt
            favoriteCount
            favoritedBy {
                id
                username
            }
            author {
                username
                id
            }
        }
    }

`

const UPDATE_NOTE = gql`
mutation UpdateNote($id: ID!,$content: String!){
    UpdateNote(id: $id,content: $content){
        id
        content
        createdAt
        favoriteCount
        favoritedBy {
            id
            username
        }
        author {
            username
            id
        }

    }
}
`

const DELETE_NOTE = gql`
    mutation DeleteNote($id: ID!){
        DeleteNote(id: $id)
    }

`




const TOGGLE_FAVORITES = gql`
    mutation toggleFavorite($id:ID!){
        toggleFavorite(id:$id) {
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

export {NEW_NOTE,SIGNIN_USER,SIGNUP_USER,UPDATE_NOTE,TOGGLE_FAVORITES,DELETE_NOTE}