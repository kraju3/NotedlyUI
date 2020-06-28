import React from 'react';
import ReactDOM from 'react-dom';
import WebApp from './pages/index'
import{ApolloClient,ApolloProvider,InMemoryCache}from '@apollo/client'
import Client from './client'



function App (){

    return (
        <ApolloProvider client = {Client}>
            <WebApp/>
        </ApolloProvider>
    )

}





ReactDOM.render(<App/>,document.getElementById('root'));