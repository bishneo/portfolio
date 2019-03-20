import React from 'react';
import { NavLink } from 'react-router-dom';
const PageLinks = () => {
    return (
        <div className="container">
            <ul className='right'>
                <li><NavLink to='/resume'>Profile</NavLink></li>
                <li><NavLink to='/projects'>Projects</NavLink></li>
                <li>
                    <a href="/resume" data-tooltip='Download Resume' className='tooltipped btn btn-floating grey darken-1'>
                        <i className="material-icons">assignment</i>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default PageLinks;