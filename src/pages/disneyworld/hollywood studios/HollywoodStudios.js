import LandList from "../../../components/lands/LandList";
import HOLLYWOODSTUDIOSLANDS from "./Info.js";
import React from 'react';
import classes from '../../Pages.module.css';

function HollywoodStudios(props) {
    return (
        <div className={classes.parklist}>
            <h1>Hollywood Studios</h1>
            <LandList total={props.total} inc={props.inc} dec={props.dec} lands={HOLLYWOODSTUDIOSLANDS} />
        </div>
    )
}

export default HollywoodStudios;