import React from 'react';
import ProfileStore from '../stores/ProfileStore'
import InfoStore from '../stores/InfoStore';
import AboutSection from '../sections/AboutSection';
import ProfileTabs from '../layout/ProfileTabs';
const Profile = () => {
    const { Details, About } = ProfileStore;
    const { skills, education, experience } = Details;

    return (
        <div className='sub-panel resume-page'>
            <div className="flexbox row">
                <div className="col s12 l4 about">
                    <AboutSection about={About} info={InfoStore} />
                </div>
                <div className="col s12 l8 grey darken-4 grey-text text-lighten-4">
                    <ProfileTabs education={education} experience={experience} skills={skills} />
                </div>
            </div>
        </div>
    )
}

export default Profile;