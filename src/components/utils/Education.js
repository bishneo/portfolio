import React from 'react';
const Education = ({ imgUrl, uniUrl, uniName, major, start, end, courses }) => {
    return (
        <div className="row">
            <div className="col s12 l2 offset-l1">
                <img className="uni-logo responsive-img" src={imgUrl} alt=""></img>
            </div>
            <div className="col s12 l8 offset-l1">
                <div>
                    <a href={uniUrl}>
                        <h5 className="pink-text text darken-2">
                        <i className="material-icons">school</i>
                        <span>&nbsp;&nbsp;</span>{uniName}</h5>
                    </a>
                    <h6>{major}</h6>
                    <h6>{start} - {end}</h6>
                    <div className="divider"></div>
                    <p><em>Related courses:</em> {courses}</p>
                </div>
            </div>
        </div>
    )
}

export default Education;