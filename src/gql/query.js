import {gql} from '@apollo/client'


const IS_LOGGED_IN = gql`
query getLoggedIn {
        isLoggedIn
}
`;

const GET_NOTES = gql`
query noteFeed($cursor:String){
  noteFeed(cursor: $cursor){
      cursor
      hasNextPage
      notes{
        id
        createdAt
        content
        favoriteCount
        author{
          username
          id
          avatar
        }
      }
    }
  }
  `;

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
`;

export {GET_NOTES,NOTE_QUERY,IS_LOGGED_IN}