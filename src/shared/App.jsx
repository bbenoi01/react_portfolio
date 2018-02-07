import React, { Component } from 'react';
import './App.css';
import Navbar from './js/index/navbarIndex';
import Intro from './js/index/introIndex';
import Projects from './js/index/projectsIndex';
import AboutMe from './js/index/aboutMeIndex';
import ContactMe from './js/index/contactMeIndex';
import Thanks from './js/index/thanksIndex';
import Footer from './js/index/footerIndex';

export default class App extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Intro />
                <Projects />
                <AboutMe />
                <ContactMe />
                <Thanks />
                <Footer />
            </div>
        );
    }
}