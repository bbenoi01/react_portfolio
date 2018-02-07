import React, { Component } from 'react';

export default class AboutMe extends Component {
    render() {
        return (
            <div className="parallax-container" id='about'>
                <div className="section no-pad-bot">
                    <div className="container">
                        <div className="row center">
                            <div className="fade"></div>
                            <section className="star-wars">
                                <div className="crawl swy">
                                    <div className="title">
                                        <h3>Brandon Benoit</h3>
                                        <h1>About Me</h1>
                                    </div>
                                    <p>Hello, and thank you for visiting my portfolio. My name is Brandon Benoit, 
                                    I'd like to tell you a little about myself and let you know why I created this page.
                                    </p>
                                    <p>I've spent the better part of the last 23 years working in the wireless industry. Spending 
                                        most of my time in retail, I've held positions in sales, sales management, sales operations 
                                        and logistics, and sales training. After a while, I changed my focus and got my A+ certification 
                                        with the intention of going into IT.
                                    </p>
                                    <p>I have recently graduated from  Origin Code Academy, where I was introduced 
                                        to a few different technologies including but not limited to JavaScript, HTML, and React.
                                    </p> 
                                    <p>I have also done work with CSS, MySQL, MongoDB, Express, React, and Redux. I have learned
                                        a lot, but I also realize that I have a lot to learn!
                                    </p> 
                                    <p>I am currently seeking employment as a web developer. If you would like to get in contact with me, please 
                                        enter your information in the Contact Me section, and I will promptly get back to you.
                                    </p>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
                <div className="parallax">
                    <img src="starfield.jpg" alt="unsplashed space" style={{width: '100vw'}}/>
                </div>
            </div>
        );
    }
}