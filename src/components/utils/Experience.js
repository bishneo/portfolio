import React from 'react';
const Experience = ({ empName, empUrl, jobRole, start, end, desc, bullets, place, img }) => {
    return (
        <div className="section">
            <div className="flexbox row">
                <div className="col l6 s6">
                    <a href={empUrl}>
                        <h5 className="pink-text text darken-2">{empName}</h5>
                    </a>
                    <div>
                        <h6 style={{ display: 'inline-block' }}>{jobRole}</h6>
                        <i style={{ paddingLeft: '5px' }}>({place})</i>
                    </div>
                    <h6>{start} - {end}</h6>
                </div>
                <div className="col l6 s4 offset-s2">
                    <img
                        className="responsive-img z-depth-1 valign shrink-img"
                        src={img}
                        alt="Organization Image"
                    />
                </div>
            </div>
            <div className="divider"></div>
            <p>{desc}</p>
            <ul className="browser-default">
                {bullets && bullets.map(b => {
                    return (
                        <li className="custom-bullets" key={b.id}>{b.info}</li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Experience;