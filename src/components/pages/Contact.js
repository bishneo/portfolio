import React, { Component } from 'react';
import InfoStore from '../stores/InfoStore'
class Contact extends Component {
    render() {
        return (
            <footer className="section page-footer grey darken-4" id="contact">
                <div className="center resume-page">
                    <h4>Contact</h4>
                    <h6 className="grey-text">Please reach out to me for any Software Engineering and AI/ML opportunities.</h6>
                    <div className="row contact-section grey-text">
                        <div className="col s4 l4">
                            <i className="material-icons medium">email</i>
                            <br />
                            <span className="center">neogy.b@&#8203;husky.neu.edu</span>
                        </div>
                        <div className="col s4 l4">
                            <a href={InfoStore.location} rel="noopener noreferrer" target="_blank">
                                <i className="material-icons medium grey-text">location_on</i>
                            </a>
                            <br />
                            <span>Boston, MA</span>
                        </div>
                        <div className="col s4 l4 container">
                            <i className="material-icons medium">phone</i>
                            <br />
                            <span>Mobile : (857) 472-9333</span>
                        </div>
                    </div>
                    <div className="row contact-section container grey-text">
                        <div className="col s6 l6 container right-align grey-text">
                            <a href={InfoStore.linkedin} rel="noopener noreferrer" target="_blank" className="grey-text">
                                <i className="fab fa-linkedin fa-2x prefix"></i>
                            </a>
                        </div>
                        <div className="col s6 l6 container left-align grey-text">
                            <a href={InfoStore.github} rel="noopener noreferrer" target="_blank" className="grey-text">
                                <i className="fab fa-github fa-2x prefix"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright">
                    <div className="container center">&copy;2019 bish.neo</div>
                </div>
            </footer>
        )
    }
}

export default Contact;