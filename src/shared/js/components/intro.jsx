import React, { Component } from 'react';

export default class Into extends Component {
    render() {
        return (
            <div className="parallax-container valign-wrapper" id='index-banner'>
                <div className="section no-pad-bot">
                    <div className="container">
                        <h1 className="header center swy">Brandon's Protfolio</h1>
                        <div className="row center">
                            <h5 className="header col s12 swy">
                                Hello! My name is Brandon Benoit. Welcome to my personal portfolio.<br/>
                                This page serves as a showcase of some of the things that I have worked on. I hope you enjoy them!
                            </h5>
                        </div>
                        <div className="row center">
                            <div className="col l4 offset-l4 s12">
                                <img className='img-fluid' src="Me.png" alt="responsive img"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="parallax">
                    <img src="starfield.jpg" alt="unsplashed space" style={{width: '100%'}}/>
                </div>
            </div>
        );
    }
}