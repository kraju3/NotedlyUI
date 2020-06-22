import React,{useEffect} from 'react'



const Notes = ()=>{

    useEffect(()=>{
        document.title = "My Notes - Notedly"
    })

    return(
        <div>
            <h1>These are your notes</h1>
        </div>
    )
}

export default Notes