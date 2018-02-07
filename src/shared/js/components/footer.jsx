import React, { Component } from 'react';

export default class Footer extends Component {
    render() {
        return (
            <footer className="page-footer grey darken-1">
                <div className="container">
                    <div className="row center">
                        <div className="col s3">
                            <a href="Brandon_Benoit_Resume.pdf" target='_blank'><i className="fa fa-file-pdf-o fa-3x" aria-hidden='true'></i></a>
                        </div>
                        <div className="col s3">
                            <a href="mailto:brandon.benoit076@gmail.com"><i className="fa fa-envelope-o fa-3x" aria-hidden='true'></i></a>
                        </div>
                        <div className="col s3">
                            <a href="https://github.com/bbenoi01" target='_blank'><i className="fa fa-github fa-3x" aria-hidden='true'></i></a>
                        </div>
                        <div className="col s3">
                            <a href="https://www.linkedin.com/in/brandon-benoit/" target='_blank'><i className="fa fa-linkedin-square fa-3x" aria-hidden='true'></i></a>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright">
                    <div className="container">
                        Made by Brandon Benoit
                    </div>
                </div>
            </footer>
        );
    }
}