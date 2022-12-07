import React, { Component } from 'react'
import img1 from './images/img1.jpeg';
import img2 from './images/img2.jpeg';
import img3 from './images/img3.jpeg';


// import {Link} from 'react-router-dom';
// import logo from '../logo.svg';
// import styled from 'styled-components';
// import {ButtonContainer} from './Button';




export default class Carousel extends Component {
    render() {
        return (
        

            // <div className="container">
            <div id="carouselExampleCaptions" className="carousel slide carousel-fade" data-bs-ride="carousel" >
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1" ></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="6000">
                <img src={img1} className="d-block w-100" alt="..."/>
                <div className="carousel-caption d-none d-md-block">
                    <h3>Christmas Sale</h3>
                    <p>Shop now and get upto 30% off*!!!</p>
                </div>
                </div>
                <div className="carousel-item" data-bs-interval="6000">
                <img src={img2} className="d-block w-100" alt="..."/>
                <div className="carousel-caption d-none d-md-block">
                    <h3>HP16, now available</h3>
                    <p>Gift your child a college-perfect laptop for this session.<br/>
                        Better late than never.
                    </p>
                </div>
                </div>
                <div className="carousel-item" data-bs-interval="6000">
                <img src={img3} className="d-block w-100" alt="..."/>
                <div className="carousel-caption d-none d-md-block">
                    <h3>The best online electronics store</h3>
                    <p>Shop now from the world's biggest and most trusted <br/>online store and get additional benifits</p>
                </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
            </div>
            // </div>
            
           
        )
    }
}
;
