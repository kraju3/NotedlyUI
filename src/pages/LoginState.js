import {useApolloClient,gql, useQuery} from '@apollo/client'
import React from 'react'
import {Link,withRouter} from 'react-router-dom';
import "../css/webapp.css";

const IS_LOGGED_IN = gql`
query getLoggedIn {
        isLoggedIn
}
`

function LoginState(props){
    const {data,client} = useQuery(IS_LOGGED_IN);
    console.log(data)

    return (
        
    <div className="right menu">
         {data.isLoggedIn ?(
        <div className="right menu">
            <div className="item navigation">
            <button class="ui primary button" onClick = {()=>{
                localStorage.removeItem('token');
                client.resetStore();
                client.writeQuery({query:IS_LOGGED_IN,data:{
                    isLoggedIn:false
                }})
                props.history.push('/')
            }}>
                Log Out
            </button>
            </div>
        </div>
        ):(
        <div className="right menu">
            <div className = "item navigation">
                <Link to="/signin">
                </Link>
                <a className= "navigation" href="/signin">Log In</a>
            </div>
            <div className = "item navigation">
                <Link to="/signup">
                </Link>
                <a className= "navigation" href="/signup">Sign Up</a>
            </div>
        </div>
        ) }
    </div>
    )

}

export default withRouter(LoginState)