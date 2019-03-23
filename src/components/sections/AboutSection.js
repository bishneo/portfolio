import React from 'react';
const AboutSection = ({ about, info }) => {
    return (
        <div>
            <div className="row">
                <div className="col s12 l6 offset-l3">
                    <img
                        className="responsive-img circle z-depth-1"
                        src={about.image}
                        alt=""
                    />
                </div>
            </div>

            <h2>{about.name}</h2>
            <h4 className="grey-text text-darken-2">{about.currStatus}</h4>
            <h6 className="grey-text text-darken-1">{about.field}</h6>

            <hr style={{ borderTop: '3px solid #833fb2', width: '100%' }} />

            <p>{about.aboutme}</p>

            {/* <hr style={{ borderTop: '3px solid #833fb2', width: '100%' }} /> */}
            <blockquote><em>{about.quote}</em></blockquote>
            {/* <h5 className="grey-text text-darken-2">Address</h5>
            <p>{info.address}</p>
            <h5 className="grey-text text-darken-2">Phone</h5>
            <p>{info.phno}</p>
            <h5 className="grey-text text-darken-2">Email</h5>
            <p>{info.email}</p> */}

            <hr style={{ borderTop: '3px solid #833fb2', width: '100%' }} />
        </div>
    )
}

export default AboutSection;