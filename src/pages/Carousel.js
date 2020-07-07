
import React from 'react';

import SignUpForm from './signup';
import SignInForm from './signin';

import image1 from '../img/notesimage2.jpg'
import image2 from '../img/notesimage3.jpg'
import logo from '../img/logo.svg';

import '../css/webapp.css'


function Carousel(){
    return(
    <div>
        <h2 className="ui center aligned icon header">
        <img src={logo}/>
        Notely
      </h2>
    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
    <ol className="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    </ol>
    <div className="carousel-inner">
        <div className="carousel-item active">
        <img src={image1} className="image" alt="..."/>
        </div>
        <div className="carousel-item">
        <img src={image2} className="image" alt="..."/>
        </div>
    </div>
    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
    </a>
    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
    </a>
    </div>
    </div>
        
    )
}

export default Carousel