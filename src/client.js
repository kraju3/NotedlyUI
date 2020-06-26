import{ApolloClient,ApolloProvider,InMemoryCache}from '@apollo/client'

const uri = process.env.API_URI;
const cache = new InMemoryCache();

const client = new ApolloClient({
    uri,cache,connectToDevTools:true
})


export default client
