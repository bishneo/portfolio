import React from 'react';
import { NavLink } from 'react-router-dom';
import InfoStore from '../stores/InfoStore';

const PageLinks = () => {
    return (
        <div className="container">
            <ul className='right'>
                <li><NavLink to='/profile'>Profile</NavLink></li>
                <li><NavLink to='/projects'>Projects</NavLink></li>
                <li>
                    <a href={InfoStore.resume} rel="noopener noreferrer" target="_blank" title="Download Resume" className='btn btn-floating grey darken-1'>
                        <i className="material-icons">assignment</i>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default PageLinks;