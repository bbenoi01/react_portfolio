import React, { Component } from 'react';

export default class Thanks extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { firstName, lastName, email, interested } = this.props;

        if (interested == false) {
            return (
                <div className="parallax-container valign-wrapper">
                    <div className="parallax">
                        <img src="starfield.jpg" alt="unsplashed space" style={{width: '100vw'}}/>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="parallax-container valign-wrapper">
                    <div className="section no-pad-bot">
                        <div className="container">
                            <div className="row center">
                                <h3 className="swy">Thank you {firstName} {lastName}, for your interest. I will reach out to you at {email} shortly.</h3>
                            </div>
                        </div>
                    </div>
                    <div className="parallax">
                        <img src="starfield.jpg" alt="unsplashed space" style={{width: '100vw'}}/>
                    </div>
                </div>
            )
        }
    }
}