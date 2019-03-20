import React, { Component } from 'react';
import Education from '../utils/Education';
import Experience from '../utils/Experience';
import Skill from '../utils/Skill'
class Resume extends Component {
    render() {
        return (
            <div className='main resume-page'>
                <div className="row">
                    <div className="col s12 l4">
                        <div className="row">
                            <div className="col s12 l6 offset-l3">
                                <img
                                    className="responsive-img"
                                    src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
                                    alt=""
                                />
                            </div>
                        </div>

                        <h2>Bishwarup Neogy</h2>
                        <h4 className="grey-text text-darken-2">Graduate Student</h4>
                        <h6 className="grey-text text-darken-1">Computer Science</h6>
                        <hr style={{ borderTop: '3px solid #833fb2', width: '100%' }} />
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                        <hr style={{ borderTop: '3px solid #833fb2', width: '100%' }} />
                        <h5 className="grey-text text-darken-2">Address</h5>
                        <p>231 Park Dr, Boston, MA, 02215</p>
                        <h5 className="grey-text text-darken-2">Phone</h5>
                        <p>(857) 472-9333</p>
                        <h5 className="grey-text text-darken-2">Email</h5>
                        <p>neogy.b@husky.neu.edu</p>
                        <hr style={{ borderTop: '3px solid #833fb2', width: '100%' }} />
                    </div>
                    {/* Education section */}
                    <div className="col s12 l8 grey darken-4 white-text">
                        <div className="section" id="edu">
                            <h3>Education</h3>
                            <Education
                                imgUrl="res/images/NEUlogo.png"
                                uniUrl="https://www.khoury.northeastern.edu/program/computer-science-ms/"
                                uniName="Northeastern University"
                                major="Computer Science"
                                start="Sep 2018"
                                end="Dec 2020"
                                courses="Programming Design Patterns, Foundations of Artificial Intelligence, Algorithm, Robotic Systems and Sciences" />

                            <Education
                                imgUrl="res/images/NITWlogo.png"
                                uniUrl="https://www.nitw.ac.in/"
                                uniName="National Institute of Technology, Warangal"
                                major="Electronics and Communication Engineering"
                                start="Sep 2011"
                                end="May 2015"
                                courses="Programming Design Patterns, Foundations of Artificial Intelligence, Algorithm, Robotic Systems and Sciences" />
                        </div>
                        <hr style={{ border: '1.5px solid #e22947', width: '90%' }} />
                        <div className="section" id="emp">
                            <h3>Experience</h3>
                            <Experience
                                empUrl=""
                                empName="Nokia"
                                jobRole="Senior Engineer"
                                start="July 2015"
                                end="July 2018"
                                desc="Worked as a Full Stack developer and contributed to the development of a web application intended to provide customers an user friendly interface to manage optical networks."
                            />
                        </div>
                        <hr style={{ border: '1.5px solid #e22947', width: '90%' }} />
                        <div className="section" id="skills">
                            <h3>Skills</h3>
                            <div className="container">
                                <Skill skillName="Java" ratings="90%"/>
                                <Skill skillName="JavaScript" ratings="80%"/>
                                <Skill skillName="Spring Boot" ratings="80%"/>
                                <Skill skillName="C/C++" ratings="70%"/>
                                <Skill skillName="React JS" ratings="70%" />
                                <Skill skillName="MySQL" ratings="60%"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Resume;