import React from 'react';
import Skill from '../utils/Skill'

const SkillSection = ({ skills }) => {
    return (
        <div className="section" id="skills">
            <h3>Skills</h3>
            <div className="container">
                {skills && skills.map(s => {
                    return (
                        <Skill skillName={s.name} ratings={s.ratings} key={s.id} />
                    )
                })}
            </div>
        </div>
    )
}

export default SkillSection;