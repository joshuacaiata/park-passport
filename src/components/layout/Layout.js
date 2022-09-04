import Nav from "./Nav";
import classes from './Layout.module.css';
import React from 'react';

function Layout(props) {
    return (
        <div className={classes.block}>
            <Nav />
            <main className={classes.main}>{props.children}</main>
        </div>
    )
}

export default Layout;