import React,{useEffect} from 'react'


const Favorites = ()=>{
    useEffect(()=>{
        document.title = 'Favorites - Notedly';
    });
    return(
        <div>
            <h1>Favorites</h1>
        </div>
    )
}



export default Favorites