import React from 'react';
import Experience from '../utils/Experience'
const ExpSection = ({ experience }) => {
    return (
        <div className="section" id="emp">
            <h3>Experience</h3>
            {experience && experience.map(exp => {
                return (
                    <Experience
                        empUrl={exp.url}
                        empName={exp.empName}
                        jobRole={exp.jobRole}
                        start={exp.start}
                        end={exp.end}
                        desc={exp.desc}
                        key={exp.eId}
                        bullets={exp.bullets}
                    />
                )
            })}
        </div>
    )
}

export default ExpSection;