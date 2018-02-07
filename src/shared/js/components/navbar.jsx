import React, { Component } from 'react';

export default class Navbar extends Component {
    render() {
        return (
            <nav className="grey darken-1" role='navigation'>
                <div className="nav-wrapper">
                    <div className="valign-wrapper">
                        <p className="brand-logo" style={{ paddingLeft: '15px' }}>Welcome!</p>
                    </div>
                    <ul className="right hide-on-med-and-down">
                        <li><a href="Brandon_Benoit_Resume.pdf" target='_blank'><i className="fa fa-file-pdf-o fa-2x" aria-hidden='true'></i></a></li>
                        <li><a href="mailto:brandon.benoit076@gmail.com"><i className="fa fa-envelope-o fa-2x" aria-hidden="true"></i></a></li>
                        <li><a href="https://github.com/bbenoi01" target='_blank'><i className="fa fa-github fa-2x" aria-hidden="true"></i></a></li>
                        <li><a href="https://www.linkedin.com/in/brandon-benoit/" target='_blank'><i className="fa fa-linkedin-square fa-2x" aria-hidden="true"></i></a></li>
                    </ul>

                    <ul className="side-nav" id='nav-mobile'>
                        <li><a href="Brandon_Benoit_Resume.pdf" target='_blank'><i className="fa fa-file-pdf-o fa-3x" aria-hidden='true'></i></a></li>
                        <li><a href="mailto:brandon.benoit076@gmail.com"><i className="fa fa-envelope-o fa-3x" aria-hidden="true"></i></a></li>
                        <li><a href="https://github.com/bbenoi01" target='_blank'><i className="fa fa-github fa-3x" aria-hidden="true"></i></a></li>
                        <li><a href="https://www.linkedin.com/in/brandon-benoit/" target='_blank'><i className="fa fa-linkedin-square fa-3x" aria-hidden="true"></i></a></li>
                    </ul>
                    <a href="#" className="button-collapse" data-activates='nav-mobile'><i className="material-icons">menu</i></a>
                </div>
            </nav>
        );
    }
}