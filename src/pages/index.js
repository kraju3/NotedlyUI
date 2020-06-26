import React,{useState,useEffect} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Notes from './mynotes';
import Favorites from './favorites'
import logo from '../img/logo.svg'
function WebApp(){

    return (
        <Router>
            <div>
                <nav className = "navbar navbar-expand-lg navbar-dark bg-dark" >
                <a className="navbar-brand">
                    <img src={logo} width="30" height="30" className="d-inline-block align-top" alt="" loading="lazy"/>
                Notedly
                </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className = "navbar-nav">
                        <li className ="nav-item">
                            <Link to="/mynotes">
                            <a className="nav-link" href="/mynotes">Notes</a>
                            </Link>
                        </li>
                        <li className ="nav-item">
                            <Link to="/favorites">
                            <a className="nav-link" href="/favorites">Favorites</a>
                            </Link>
                        </li>
                        <li className ="nav-item">
                            <Link to="/signup">
                            <a className="nav-link" href="/signup">Register</a>
                            </Link>
                        </li>
                        <li className ="nav-item">
                            <Link to="/signin">
                            <a className="nav-link" href="/signin">Sign In</a>
                            </Link>
                        </li>
                    </ul>
                </div>
                </nav>

                <Switch>
                    <Route path="/mynotes">
                        <Notes/>
                    </Route>
                    <Route path="/favorites">
                        <Favorites/>
                    </Route>
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
        <label for="inputAddress">Email</label>
        <input type="text" className="form-control" id="email" onChange={e=>setEmail(e.target.value)}/>
    </div>
    <div className="form-row">
      <div className="form-group col-md-6">
        <label for="inputEmail4">Username</label>
        <input type="text" className="form-control" id="username" onChange={e=>setUserName(e.target.value)}/>
      </div>
      <div className="form-group col-md-6">
        <label for="inputPassword4">Password</label>
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
                <label for="inputEmail4">First Name</label>
                <input type="text" className="form-control" id="firstname" onChange={e=>setFirstName(e.target.value)}/>
              </div>
              <div className="form-group col-md-6">
                <label for="inputPassword4">Last Name</label>
                <input type="text" className="form-control" id="lastname" onChange={e=>setLastName(e.target.value)}/>
              </div>
            </div>
            <div className="form-group">
                <label for="inputAddress">Email</label>
                <input type="text" className="form-control" id="email" onChange={e=>setEmail(e.target.value)}/>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label for="inputEmail4">Username</label>
                <input type="text" className="form-control" id="username" onChange={e=>setUserName(e.target.value)}/>
              </div>
              <div className="form-group col-md-6">
                <label for="inputPassword4">Password</label>
                <input type="password" className="form-control" id="password" onChange={e=>setPassword(e.target.value)}/>
              </div>
            </div>
            <button type="submit" className="btn btn-primary" onClick = {submitForm}>Sign Up</button>
          </form>
          </div>
        )


}

export default WebApp;