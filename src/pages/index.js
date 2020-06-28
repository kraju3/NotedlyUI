import React,{useState,useEffect} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


import Home from './home'
import Notes from './mynotes';
import Favorites from './favorites'
import NotePage from './notes';
import SignUpForm from './signup';
import SignInForm from './signin';


import logo from '../img/logo.svg'



function WebApp(){

    return (
        <Router>
            <div>
              <div className="ui secondary pointing menu">
                    <div className="item">

                      <img src={logo} href="#"/>
                    </div>
                    <div className = "item">
                    <Link to="/home">
                     Home
                    </Link>
                    </div>
                    <div className = "item">
                    <Link to="/mynotes">
                      Notes
                    </Link>
                    </div>
                    <div className = "item">
                    <Link to="/favorites">
                      Favorites
                    </Link>
                    </div>
                    <div className="right menu">
                      <div className = "item">
                      <Link to="/signin">
                        Login
                      </Link>
                      </div>
                      <div className = "item">
                      <Link to="/signup">
                        Register
                      </Link>
                      </div>
                  </div>
                </div>

                <Switch>
            
                    <Route path="/home" component={Home}/>
              
                    <Route path="/mynotes"component={Notes}/>
                     
                    <Route path="/favorites" component ={Favorites}/>
                     
                    <Route path ="/note/:id" component ={NotePage}/>

                    <Route path="/signup" component = {SignUpForm}/>

                    <Route path="/signin" component={SignInForm}/>
                    
                </Switch>
            </div>


        </Router>
    )

}







export default WebApp;


 