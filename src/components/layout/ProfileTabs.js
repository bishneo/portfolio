import React, { Component } from 'react';
import { Tabs, Tab } from '@material-ui/core';
import EduSection from '../sections/EduSection';
import ExpSection from '../sections/ExpSection';
import SkillSection from '../sections/SkillSection';

class ProfileTabs extends Component {
    state = {
        value: 0,
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    render() {
        const { education, experience, skills } = this.props;
        const { value } = this.state;

        return (
            <div>
                <Tabs
                    value={value}
                    onChange={this.handleChange}
                    variant="fullWidth"
                >
                    <Tab label="Education" icon={<i className="material-icons">school</i>} />
                    <Tab label="Experience" icon={<i className="material-icons">work</i>} />
                    <Tab label="Skills" icon={<i className="material-icons">playlist_add_check</i>} />
                </Tabs>
                {value === 0 && <EduSection education={education} />}
                {value === 1 && <ExpSection experience={experience} />}
                {value === 2 && <SkillSection skills={skills} />}
            </div>
        );
    }
}

export default ProfileTabs;
