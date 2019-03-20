import React, { Component } from 'react';
import ProjectCard from '../utils/ProjectCard'
class Projects extends Component {
    render() {
        return (
            <div className="row container">
                <ProjectCard
                    title="Neural Style Transfer"
                    imgUrl="res/images/nstsample.png" />
                <ProjectCard
                    title="Stock Exchange Learner"
                    link="https://github.ccs.neu.edu/bishneo/PDP_5010_A8_Stocks2"
                    imgUrl="res/images/stockex.png" />
                <ProjectCard
                    title="Biometric Recognition System" 
                    imgUrl="res/images/biometric.png"/>
                <ProjectCard
                    title="Motorized Guitar Tuner"
                    imgUrl="res/images/guitartuner.jpg" />
                <ProjectCard
                    title="Planner Web App" 
                    link="https://marioplan-a1a82.firebaseapp.com/signIn"
                    imgUrl="res/images/plannerapp.png"/>
                <ProjectCard
                    title="Emergency Caller App" 
                    link="https://devpost.com/software/emergency-caller"
                    imgUrl="res/images/emcaller.jpg"/>
            </div>
        )
    }
}

export default Projects;