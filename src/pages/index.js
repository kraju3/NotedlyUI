import React,{useState,useEffect} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";

import {useQuery,gql} from '@apollo/client'

import Carousel from './Carousel';
import Home from './home'
import Notes from './mynotes';
import Favorites from './favorites'
import NotePage from './notes';
import SignUpForm from './signup';
import SignInForm from './signin';
import LoginState from './LoginState';


import "../css/webapp.css";

import Styled from "styled-components";

import logo from '../img/logo.svg'

const Button = Styled.button`
padding:0px;
border:none;
box-sizing:content-box;
width:auto;
height:auto;
background:none;

`
const Logo = Styled.img`
width:30%;
height:30%;
background-color:white;
padding: 0px 0px 0px 0px;
box-sizing:content-box;

`

const IS_LOGGED_IN = gql`
query getLoggedIn {
        isLoggedIn
}
`


function WebApp(props){
  const {loading,error,data} = useQuery(IS_LOGGED_IN)
    return (
        <Router>
            <div>
              <div className="ui secondary pointing menu">
                    <div className="item navigation" >
                      <Link to="/">
                      <Logo src={logo}/>
                      </Link>
                    </div>
                    <div className = "item">
                    <Link to="/home">
                    </Link>
                    <a className= "navigation" href="/home">Home</a>
                    </div>
                    <div className = "item navigation">
                    <Link to="/mynotes">
                    </Link>
                    <a className= "navigation" href="/mynotes">Notes</a>
                    </div>
                    <div className = "item navigation">
                    <Link to="/favorites">
                    </Link>
                    <a className= "navigation" href="/favorites">Favorites</a>
                    </div>
                    <LoginState/>
                </div>

                <Switch>
                    <Route exact path="/" component={Carousel}/>
                    <Route path="/home" component={Home}/>
                     
                    <Route path ="/note/:id" component ={NotePage}/>
                    <Route path ="/signup" component ={SignUpForm}/>
                    <Route path ="/signin" component ={SignInForm}/>
                    {data.isLoggedIn===true?<Route path="/mynotes"component={Notes}/>:<Redirect to={{pathname:"/signin"}}/>}
                    {data.isLoggedIn===true?<Route path="/favorites" component ={Favorites}/>:<Redirect to={{pathname:"/signin"}}/>}
                    
                </Switch>
            </div>


        </Router>
    )

}






export default WebApp;


 