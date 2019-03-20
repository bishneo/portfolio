import React, { Component } from 'react';
class Contact extends Component {
    render() {
        return (
            <footer class="section page-footer black" id="contact">
                <div class="center resume-page">
                    <h4>Contact</h4>
                    <h5>Please reach out to me for any Software Development Internship/Co-op opportunities.</h5>
                    <div className="row contact-section container grey-text">
                        <div className="col s4 l4 container">
                            <i className="material-icons medium">email</i>
                            <br />
                            <span>neogy.b@husky.neu.edu</span>
                        </div>
                        <div className="col s4 l4 container grey-text">
                            <a href="https://goo.gl/maps/p7dhcqLpgHT2">
                                <i className="material-icons medium grey-text">location_on</i>
                            </a>
                            <br />
                            <span>Boston, MA</span>
                        </div>
                        <div className="col s4 l4 container">
                            <i className="material-icons medium">phone</i>
                            <br />
                            <a href="" class="grey-text">Mobile : (857) 472-9333</a>
                        </div>
                    </div>
                    <div className="row contact-section container grey-text">
                        <div className="col s6 l6 container right-align grey-text">
                            <a href="https://www.linkedin.com/in/bishwarup-neogy-57347a62/" class="grey-text">
                                <i className="fab fa-linkedin fa-2x black prefix"></i>
                            </a>
                        </div>
                        <div className="col s6 l6 container left-align grey-text">
                            <a href="https://github.ccs.neu.edu/bishneo" class="grey-text">
                                <i className="fab fa-github fa-2x black prefix"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="footer-copyright black">
                    <div class="container center">&copy;2019 bish.neo</div>
                </div>
            </footer>
        )
    }
}

export default Contact;