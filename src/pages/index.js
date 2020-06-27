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
                    <Route path="/home">
                        <Home/>
                    </Route>
                    <Route path="/mynotes">
                        <Notes/>
                    </Route>
                    <Route path="/favorites">
                        <Favorites/>
                    </Route>
                    <Route path ="/note/:id" component ={NotePage}/>
                    <Route path="/signup">
                        <SignUpForm/>
                    </Route>
                    <Route path="/signin">
                        <SignInForm/>
                    </Route>
                </Switch>
            </div>


        </Router>
    )

}





function SignInForm(props){
    const[username,setUserName]=useState('')
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')

    const submitForm = function(e){
        e.preventDefault()
        props.signInForm({username,email,password})
    }

    return(
        <div>
        <form>
        <div className="form-group">
        <label>Email</label>
        <input type="text" className="form-control" id="email" onChange={e=>setEmail(e.target.value)}/>
    </div>
    <div className="form-row">
      <div className="form-group col-md-6">
        <label>Username</label>
        <input type="text" className="form-control" id="username" onChange={e=>setUserName(e.target.value)}/>
      </div>
      <div className="form-group col-md-6">
        <label>Password</label>
        <input type="password" className="form-control" id="password" onChange={e=>setPassword(e.target.value)}/>
      </div>
    </div>
    <button type="submit" className="btn btn-primary" onClick = {submitForm}>Sign In</button>
  </form>
  </div>
    )
}

function SignUpForm (props){
   
        const [firstname,setFirstName] = useState('');
        const [lastname,setLastName] = useState('');
        const [username,setUserName] = useState('');
        const [email,setEmail] = useState('');
        const [password,setPassword]= useState('');

        const submitForm = function(e){
            e.preventDefault()
            props.submitForm({firstname,lastname,username,email,password})
        }

        return(
        <div>
        <form>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label>First Name</label>
                <input type="text" className="form-control" id="firstname" onChange={e=>setFirstName(e.target.value)}/>
              </div>
              <div className="form-group col-md-6">
                <label>Last Name</label>
                <input type="text" className="form-control" id="lastname" onChange={e=>setLastName(e.target.value)}/>
              </div>
            </div>
            <div className="form-group">
                <label>Email</label>
                <input type="text" className="form-control" id="email" onChange={e=>setEmail(e.target.value)}/>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label>Username</label>
                <input type="text" className="form-control" id="username" onChange={e=>setUserName(e.target.value)}/>
              </div>
              <div className="form-group col-md-6">
                <label>Password</label>
                <input type="password" className="form-control" id="password" onChange={e=>setPassword(e.target.value)}/>
              </div>
            </div>
            <button type="submit" className="btn btn-primary" onClick = {submitForm}>Sign Up</button>
          </form>
          </div>
        )


}

export default WebApp;


 