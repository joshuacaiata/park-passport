import LandList from "../../../components/lands/LandList";
import EPCOTLANDS from "./Info.js";
import React from 'react';
import classes from '../../Pages.module.css';

function Epcot() {
    return (
        <div className={classes.parklist}>
            <h1>Epcot</h1>
            <LandList lands={EPCOTLANDS} />
        </div>
    )
}

export default Epcot;
