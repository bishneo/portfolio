import React from 'react';
const ProjectCard = ({ title, link, imgUrl, content }) => {
    const placeHolderImg = "res/images/tempproj.png";
    imgUrl = imgUrl ? imgUrl : placeHolderImg;
    return (
        <div className="col s6 l4">
            <div class="card grey lighten-5 hoverable small sticky-action">
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
                    <p>Here is some more information about this product that is only revealed once clicked on.</p>
                    {link ? <a href={link} rel="noopener noreferrer" target="_blank">Link</a> : null}
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;