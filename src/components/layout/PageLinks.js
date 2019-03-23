import React from 'react';
import { NavLink } from 'react-router-dom';
import { Tooltip } from '@material-ui/core';
import InfoStore from '../stores/InfoStore';

const PageLinks = () => {
    return (
        <div className="container">
            <ul className='right'>
                <li><NavLink to='/profile'>Profile</NavLink></li>
                <li><NavLink to='/projects'>Projects</NavLink></li>
                <li>
                    <Tooltip title="Download Resume">
                        <a href={InfoStore.resume} rel="noopener noreferrer" target="_blank" className='tooltipped btn btn-floating grey darken-1'>
                            <i className="material-icons">assignment</i>
                        </a>
                    </Tooltip>
                </li>
            </ul>
        </div>
    )
}

export default PageLinks;