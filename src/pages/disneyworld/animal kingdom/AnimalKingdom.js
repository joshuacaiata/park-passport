import LandList from "../../../components/lands/LandList";
import ANIMALKINGDOMLANDS from "./Info.js";
import React from 'react';
import classes from '../../Pages.module.css';

function AnimalKingdom() {
    return (
        <div className={classes.parklist}>
            <h1>Animal Kingdom</h1>
            <LandList lands={ANIMALKINGDOMLANDS} />
        </div>
    )
}

export default AnimalKingdom;
