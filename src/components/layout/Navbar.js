import React from 'react';
import { Link } from 'react-router-dom'
import PageLinks from './PageLinks';

const Navbar = () => {
    return (
        <nav className="nav-wrapper sticky grey darken-4">
            <div className="container">
                <div className="row">
                    <div className="col s2">
                        <Link to='/' className="brand-logo left">
                            <span className="portfolio-name">Portfolio</span>
                        </Link>
                    </div>
                    <div className="col s10 offset-s3">
                        <PageLinks />
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;