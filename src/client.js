import{ApolloClient,ApolloProvider,InMemoryCache,createHttpLink,gql}from '@apollo/client'
import {setContext} from 'apollo-link-context';

const uri = process.env.API_URI;
const httpLink = createHttpLink({uri})
const cache = new InMemoryCache();


const authLink = setContext((_,{headers})=>{
    return {
        headers: {
            ...headers,
            authorization: localStorage.getItem('token')||''
        }
    }
})



const data = {
    isLoggedIn: !!localStorage.getItem('token')
};




cache.writeQuery({
    query:gql`
    query getLoggedIn {
        isLoggedIn
      }
    
    `,data})


const client = new ApolloClient({
    link:authLink.concat(httpLink),
    uri,
    cache,
    resolvers:{},
    connectToDevTools:true
})

client.onResetStore(()=>cache.writeQuery({
    query:gql`
    query getLoggedIn {
        isLoggedIn
      }
    
    `,data}))

export default client
