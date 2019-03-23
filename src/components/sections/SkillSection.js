import React from 'react';
import Skill from '../utils/Skill'
import ProfileStore from '../stores/ProfileStore';

const SkillSection = ({ skills }) => {
    return (
        <div className="section" id="skills">
            <h3>Skills</h3>
            <p>{ProfileStore.About.skill_desc}</p>
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