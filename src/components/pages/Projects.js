import React from 'react';
import ProjectCard from '../utils/ProjectCard'
import ProjectStore from '../stores/ProjectStore';
const Projects = () => {
let i = 0;
    return (
        <div className="container sub-panel">
            {/* <div className="row">
                <div class="switch center">
                    <label className='grey-text text-darken-3'>
                        Grid View
                    <input type="checkbox" />
                        <span class="lever"></span>
                        Timeline View
                    </label>
                </div>
            </div> */}
            <div className="row">
                {ProjectStore && ProjectStore.map(p => {
                    return (
                        <ProjectCard
                            title={p.title}
                            link={p.url}
                            imgUrl={p.img}
                            desc={p.desc}
                            key={i++} />
                    )
                })}
            </div>
        </div>
    )
}

export default Projects;