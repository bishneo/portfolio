import React, { Component } from 'react';
import InfoStore from '../stores/InfoStore'
class Contact extends Component {
    render() {
        return (
            <footer className="section page-footer grey darken-4" id="contact">
                <div className="center resume-page">
                    <h4>Contact</h4>
                    <h6 className="grey-text">Please reach out to me via phone/emailfor Software Engineering and AI/ML opportunities.</h6>
                    <div className="row contact-section grey-text">
                        <div className="col s4 l4">
                            <a href={InfoStore.email} className="grey-text" rel="noopener noreferrer" target="_blank">
                                <i className="material-icons medium">email</i>
                                <br />
                                <span className="center">neogy.b@&#8203;husky.neu.edu</span>
                            </a>
                        </div>
                        <div className="col s4 l4">
                            <a href={InfoStore.location} className="grey-text" rel="noopener noreferrer" target="_blank">
                                <i className="material-icons medium grey-text">location_on</i>
                                <br />
                                <span>Boston, MA</span>
                            </a>
                        </div>
                        <div className="col s4 l4 container">
                            <a href={InfoStore.phno} className="grey-text" rel="noopener noreferrer" target="_blank">
                                <i className="material-icons medium">phone</i>
                                <br />
                                <span>+1 (857) 472-9333</span>
                            </a>
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