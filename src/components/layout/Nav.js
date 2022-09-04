import { Link } from 'react-router-dom';
import classes from './Nav.module.css';
import React from 'react';

function Nav() {
    return (
        <div className={classes.header}>
            <Link to='/'>
                <div className={classes.logo}>
                    Park Passport
                </div>
            </Link>
            <nav>
                <ul>
                    <li>
                        <Link to='/florida'>Florida</Link>
                    </li>
                    <li>
                        <Link to='/california'>California</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Nav;