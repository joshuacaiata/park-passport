import LandList from "../../../components/lands/LandList";
import EPCOTLANDS from "./Info.js";
import React from 'react';
import classes from '../../Pages.module.css';

function Epcot(props) {
    return (
        <div className={classes.parklist}>
            <h1>Epcot</h1>
            <LandList total={props.total} inc={props.inc} dec={props.dec} lands={EPCOTLANDS} />
        </div>
    )
}

export default Epcot;
