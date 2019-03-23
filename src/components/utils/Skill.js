import React from 'react';

const Skill = ({ ratings, skillName }) => {
    return (
        <div className="row center">
            <div className="col s4 l2 offset-l1">
                <h6 className="right-align">{skillName}</h6>
            </div>
            <div className="col s8 l7 progress-bar">
                <div className="progress skill-progress">
                    <div className="determinate purple" style={{ width: ratings }}></div>
                </div>
            </div>
        </div>
    )
}

export default Skill;