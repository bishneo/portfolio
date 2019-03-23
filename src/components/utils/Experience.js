import React from 'react';
const Experience = ({ empName, empUrl, jobRole, start, end, desc, bullets }) => {
    return (
        <div className="section">
            <a href={empUrl}>
                <h5 className="pink-text text darken-2">{empName}</h5>
            </a>
            <h6>{jobRole}</h6>
            <h6>{start} - {end}</h6>
            <div className="divider"></div>
            <p>{desc}</p>
            <ul className="browser-default">
                {bullets && bullets.map(b => {
                    return (
                        <li className="browser-default" key={b.id}>{b.info}</li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Experience;