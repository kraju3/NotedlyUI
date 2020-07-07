import React,{useEffect} from 'react'
import {useQuery} from '@apollo/client';
import {GET_FAVORITES} from '../gql/query'
import NoteFeed from '../components/NoteFeed'


const Favorites = ()=>{
    useEffect(()=>{
        document.title = 'Favorites - Notedly';
    });

    const {data,loading,error} = useQuery(GET_FAVORITES)
    
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
  if(data.me.favorites.length!==0){
    return(
        
      <NoteFeed
         notes={data.me.favorites}
         />

 )
  }
  else{
    return <h2>No Favorites yet</h2>
  }
}



export default Favorites