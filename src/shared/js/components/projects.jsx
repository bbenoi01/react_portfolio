import React, { Component } from 'react';

export default class Projects extends Component {
    render() {
        return (
            <div className="section" id='projects'>
                <div className="container">
                    <div className="row center swy">
                        <h4>Projects</h4>
                    </div>
                    <div className="row center">
                        <div className="col s12 offset-l3 offset-s3">
                            <div className="single-item">
                                <div className='project-item'>
                                    <a href="https://bb-change-calculator.herokuapp.com/" target='_blank'>
                                        <img src="Change Calc.png" alt="responsive image" className="img-fluid"/>
                                        <div className='project-hover'>
                                            <div className='inside'>
                                                <p><b>Change Calculator</b> -- An app created using React, Express, and Axios that gives the difference 
                                                between two dollar amounts and accurately displays change broken down 
                                                by demonination.
                                                </p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className='project-item'>
                                    <a href="https://bb-error-tracker.herokuapp.com/" target='_blank'>
                                        <img src="error_tracker.png" alt="responsive image" className="img-fluid"/>
                                        <div className='project-hover'>
                                            <div className='inside'>
                                                <p><b>Error Tracker</b> -- An app created using React, MongoDB, and Axios to track return errors at wireless
                                                    retail locations. Includes the ability to add/delete employees, add/view/delete different error types,
                                                    and filter error by employee.
                                                </p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className='project-item'>
                                    <a href="https://bb-weather-app.herokuapp.com/" target='_blank'>
                                        <img src="Weather.png" alt="responsive image" className="img-fluid"/>
                                        <div className='project-hover'>
                                            <div className='inside'>
                                                <p><b>Weather App</b> -- An app created using React, Redux Express, and Axios that gives current
                                                weather information for any city in the world. Weather information provided
                                                by Open Weather Map API.
                                                </p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className='project-item'>
                                    <a href="https://delicious-deliveries.herokuapp.com/" target='_blank'>
                                        <img src="Delicious Deliveries.png" alt="responsive image" className="img-fluid"/>
                                        <div className='project-hover'>
                                            <div className='inside'>
                                                <p><b>Delicious Deliveries</b> -- An app created with a host of technologies including but not limited to React,
                                                Redux, Loopback, and MongoDB. This is a PostMates style food ordering app that
                                                uses the Google Distance API to search for restaurants in your area.
                                                </p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className='project-item'>
                                    <a href="https://bb-vstda.herokuapp.com/" target='_blank'>
                                        <img src="VSTDA.png" alt="responsive image" className="img-fluid"/>
                                        <div className='project-hover'>
                                            <div className='inside'>
                                                <p><b>VSTDA</b> -- An app created with React, Express, and Axios to help create and keep track of
                                                daily to do items.
                                                </p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className='project-item'>
                                    <a href="https://bb-nfl-schedule-generator.herokuapp.com/" target='_blank'>
                                        <img src="NFL Schedule.png" alt="responsive image" className="img-fluid"/>
                                        <div className='project-hover'>
                                            <div className='inside'>
                                                <p><b>Schedule Generator</b> -- An app created using React, Express, and Axios that shows the schedule of your
                                                favorite NFL franchise. NFL information provided by FantasyData.com API and
                                                map information provided by Pigeon Maps.
                                                </p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className='project-item'>
                                    <a href="https://bb-movie-finder.herokuapp.com/" target='_blank'>
                                        <img src="Movie Finder.png" alt="responsive image" className="img-fluid"/>
                                        <div className='project-hover'>
                                            <div className='inside'>
                                                <p><b>Movie Finder</b> -- An app created using React, Redux, Express, Axios, and Thunk that searches and
                                                displays movie information from the Open Movie Database API.
                                                </p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className='project-item'>
                                    <a href="https://jobleads.herokuapp.com/" target='_blank'>
                                        <img src="JobLeads2.png" alt="responsive image" className="img-fluid"/>
                                        <div className='project-hover'>
                                            <div className='inside'>
                                                <p><b>Job Leads</b> -- An app created with a host of technologies including but not limited to React,
                                                Redux, Loopback, and MongoDB to help graduating students of Origin Code Academy
                                                search for jobs, apply to jobs, and track the application process through intergration
                                                with the JobTrack web site. 
                                                </p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}