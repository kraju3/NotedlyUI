import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Home from './home';
import Notes from './mynotes';
import Favorites from './favorites'
import logo from '../img/logo.svg'
function WebApp(){

    return (
        <Router>
            <div>
                <nav className = "navbar navbar-expand-lg navbar-light bg-light" >
                <a className="navbar-brand">
                    <img src={logo} width="30" height="30" className="d-inline-block align-top" alt="" loading="lazy"/>
                Notedly
                </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className = "navbar-nav">
                        <li className="nav-item">
                            <Link to="/">
                            <a className="nav-link" href="/">Home</a>
                            </Link>
                        </li>
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
                </Switch>
            </div>


        </Router>
    )

}

export default WebApp;