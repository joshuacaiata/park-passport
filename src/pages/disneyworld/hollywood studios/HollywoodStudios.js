import LandList from "../../../components/lands/LandList";
import HOLLYWOODSTUDIOSLANDS from "./Info.js";
import React from 'react';
import classes from '../../Pages.module.css';

function HollywoodStudios() {
    return (
        <div className={classes.parklist}>
            <h1>Hollywood Studios</h1>
            <LandList lands={HOLLYWOODSTUDIOSLANDS} />
        </div>
    )
}

export default HollywoodStudios;