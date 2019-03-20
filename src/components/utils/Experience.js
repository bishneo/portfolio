import React from 'react';
const Experience = ({ empName, empUrl, jobRole, start, end, desc }) => {
    return (
        <div className="section">
            <a href={empUrl}>
                <h5 className="pink-text text darken-2">
                    <i className="material-icons">work</i>
                    <span>&nbsp;&nbsp;</span>{empName}</h5>
            </a>
            <h6>{jobRole}</h6>
            <h6>{start} - {end}</h6>
            <div className="divider"></div>
            <p>{desc}</p>
        </div>
    )
}

export default Experience;