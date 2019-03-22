import React from 'react';
import ProjectCard from '../utils/ProjectCard'
import Info from '../utils/Info';
const Projects = () => {
    const { mylinks, desc } = Info;  
    return (
        <div className="row main container">
            <ProjectCard
                title="Neural Style Transfer"
                link={mylinks.projects.neural}
                imgUrl="res/images/nstsample.png"
                desc={desc.projects.neural} />
            <ProjectCard
                title="Stock Exchange Learner"
                link={mylinks.projects.stock}
                imgUrl="res/images/stockex.png"
                desc={desc.projects.stock} />
            <ProjectCard
                title="Biometric Recognition System"
                link={mylinks.projects.biometric}
                imgUrl="res/images/biometric.png"
                desc={desc.projects.biometric} />
            <ProjectCard
                title="Motorized Guitar Tuner"
                link={mylinks.projects.guitar}
                imgUrl="res/images/guitartuner.jpg"
                desc={desc.projects.guitar} />
            <ProjectCard
                title="Planner Web App"
                link={mylinks.projects.planner}
                imgUrl="res/images/plannerapp.png" 
                desc={desc.projects.planner}/>
            <ProjectCard
                title="Emergency Caller App"
                link={mylinks.projects.emcaller}
                imgUrl="res/images/emcaller.jpg"
                desc={desc.projects.emcaller} />
        </div>
    )
}

export default Projects;