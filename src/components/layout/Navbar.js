import React from 'react';
import { Link } from 'react-router-dom'
import PageLinks from './PageLinks';

const Navbar = () => {
    return (
        <nav className="nav-wrapper black">
            <div className="container">
                <Link to='/' className="brand-logo left">
                    <span className="portfolio-name">Portfolio</span>
                </Link>
                <PageLinks />
            </div>
        </nav>
    )
}

export default Navbar;