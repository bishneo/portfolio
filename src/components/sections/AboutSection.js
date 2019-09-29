import React from 'react';
const AboutSection = ({ about, info }) => {
    return (
        <div>
            <div className="row">
                <div className="col l6 s12 offset-l3">
                    <img
                        className="responsive-img circle z-depth-1 halign"
                        src={about.image}
                        alt="Profile image"
                    />
                </div>
            </div>

            <h2>{about.name}</h2>
            <h4 className="grey-text text-darken-2">{about.currStatus}</h4>
            <h6 className="grey-text text-darken-1">{about.field}</h6>

            <hr style={{ borderTop: '3px solid #833fb2', width: '100%' }} />

            <p>{about.aboutme.p1}</p>
            <p>{about.aboutme.p2}</p>
            <blockquote>
                <p><em>{about.quote.text}</em></p>
                <p><em>&mdash;&nbsp;{about.quote.author}</em></p>
            </blockquote>

            <hr style={{ borderTop: '3px solid #833fb2', width: '100%' }} />
        </div>
    )
}

export default AboutSection;