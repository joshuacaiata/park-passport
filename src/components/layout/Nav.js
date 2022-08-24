import { Link } from 'react-router-dom';
import classes from './Nav.module.css';
import React from 'react';

function Nav() {
    return (
        <header className={classes.header}>
            <div className={classes.logo}>
                Park Passport
            </div>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/florida'>Florida</Link>
                    </li>
                    <li>
                        <Link to='/california'>California</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Nav;