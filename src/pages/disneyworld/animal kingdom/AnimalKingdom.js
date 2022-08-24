import LandList from "../../../components/lands/LandList";
import ANIMALKINGDOMLANDS from "./Info.js";
import React from 'react';
import classes from '../../Pages.module.css';

function AnimalKingdom(props) {
    return (
        <div className={classes.parklist}>
            <h1>Animal Kingdom</h1>
            <LandList total={props.total} inc={props.inc} dec={props.dec} lands={ANIMALKINGDOMLANDS} />
        </div>
    )
}

export default AnimalKingdom;
