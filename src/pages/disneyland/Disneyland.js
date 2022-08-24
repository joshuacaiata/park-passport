import LandList from "../../components/lands/LandList";
import DISNEYLANDLANDS from "./Info";
import React from 'react';
import classes from '../Pages.module.css';

function Disneyland() {
    return (
        <div className={classes.parklist}>
            <h1>Disneyland</h1>
            <LandList lands={DISNEYLANDLANDS}/>
        </div>
    )
}

export default Disneyland;