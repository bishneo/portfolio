import React from 'react'
import Education from '../utils/Education';

const EduSection = ({ education }) => {
    return (
        <div className="section" id="edu">
            <h3>Education</h3>
            {education && education.map(edu => {
                return (
                    <Education
                        imgUrl={edu.img}
                        uniUrl={edu.url}
                        uniName={edu.uniName}
                        degree={edu.degree}
                        major={edu.major}
                        start={edu.start}
                        end={edu.end}
                        courses={edu.courses}
                        key={edu.uId} />
                )
            })}
        </div>
    )
}

export default EduSection;