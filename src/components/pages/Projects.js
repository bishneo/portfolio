import React from 'react';
import ProjectCard from '../utils/ProjectCard'
import ProjectStore from '../stores/ProjectStore';
const Projects = () => {
    return (
        <div className="row sub-panel container">
            {ProjectStore && ProjectStore.map(p => {
                return (
                    <ProjectCard
                        title={p.title}
                        link={p.url}
                        imgUrl={p.img}
                        desc={p.desc} 
                        key={p.pId}/>
                )
            })}
        </div>
    )
}

export default Projects;