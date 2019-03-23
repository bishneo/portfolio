import React from 'react';
const ProjectCard = ({ title, link, imgUrl, desc }) => {
    const placeHolderImg = "res/images/tempproj.png";
    imgUrl = imgUrl ? imgUrl : placeHolderImg;
    desc = desc ? desc : "Coming soon...";
    return (
        <div className="col s6 l4">
            <div className="card hoverable small sticky-action">
                <div className="card-image waves-effect waves-block waves-light">
                    <img className="activator" src={imgUrl} alt="" />
                </div>
                <div className="card-content">
                    <span className="card-title activator grey-text text-darken-3"><b>{title}</b></span>
                </div>
                <div className="card-reveal">
                    <span className="flow-text card-title project-card-title grey-text text-darken-3">{title}
                        <i className="material-icons right">close</i>
                    </span>
                    <p>{desc}</p>
                    {link ? <a href={link} rel="noopener noreferrer" target="_blank">Link</a> : null}
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;