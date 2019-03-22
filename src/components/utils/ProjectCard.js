import React from 'react';
const ProjectCard = ({ title, link, imgUrl, desc }) => {
    const placeHolderImg = "res/images/tempproj.png";
    imgUrl = imgUrl ? imgUrl : placeHolderImg;
    desc = desc ? desc : "Coming soon...";
    return (
        <div className="col s6 l4">
            <div class="card hoverable small sticky-action">
                <div class="card-image waves-effect waves-block waves-light">
                    <img class="activator" src={imgUrl} alt="" />
                </div>
                <div class="card-content">
                    <span class="card-title activator grey-text text-darken-3"><b>{title}</b></span>
                </div>
                <div class="card-reveal">
                    <span class="flow-text card-title project-card-title grey-text text-darken-3">{title}
                        <i class="material-icons right">close</i>
                    </span>
                    <p>{desc}</p>
                    {link ? <a href={link} rel="noopener noreferrer" target="_blank">Link</a> : null}
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;