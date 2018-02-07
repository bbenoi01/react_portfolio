import React, { Component } from 'react';
import {
    firstNameInput,
    lastNameInput,
    emailInput
} from '../actions/contactAction';

export default class ContactMe extends Component {
    constructor(props) {
        super(props);

        this.handleFirstNameInput = this.handleFirstNameInput.bind(this);
        this.handleLastNameInput = this.handleLastNameInput.bind(this);
        this.handleEmailInput = this.handleEmailInput.bind(this);
        
    }

    handleFirstNameInput(e) {
        const { dispatch } = this.props;
        const { value } = e.target;
        dispatch(firstNameInput(value));
    }

    handleLastNameInput(e) {
        const { dispatch } = this.props;
        const { value } = e.target;
        dispatch(lastNameInput(value));
    }

    handleEmailInput(e) {
        const { dispatch } = this.props;
        const { value } = e.target;
        dispatch(emailInput(value));
    }

    render() {

        const { firstName, lastName, email, interested } = this.props;

        return (
            <div className="section" id='contact'>
                <div className="row">
                    <div className="col s12 center">
                        <h4 className='swy'>Contact Me</h4>
                        <div className="container">
                            <div className="row">
                                <div className="col l8 offset-l2 s12">
                                    <div className="card grey darken-4">
                                        <div className="card-content white-text">
                                            <form action='/' method='POST'>
                                                <div className='input-field'>
                                                    <input type="text" name='firstName' id='firstName' onChange={ this.handleFirstNameInput }/>
                                                    <label htmlFor="firstName">First Name</label>
                                                </div>
                                                <div className='input-field'>
                                                    <input type="text" name='lastName' id='lastName' onChange={ this.handleLastNameInput }/>
                                                    <label htmlFor="lastName">Last Name</label>
                                                </div>
                                                <div className='input-field'>
                                                    <input type="email" name='email' id='email' onChange={ this.handleEmailInput }/>
                                                    <label htmlFor="email">Email</label>
                                                </div>
                                                <br/>
                                                <div>
                                                    <button className="btn blue waves-effect waves-light" type='submit'>Submit</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}