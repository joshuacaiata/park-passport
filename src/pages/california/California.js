import CALIFORNIAPARKS from "./CaliforniaParks";
import ParkList from '../../components/parks/ParkList';
import classes from '../../components/parks/ParkCard.module.css';

import React from "react";

function California() {
    return (
        <ul className={classes.cards}>
            <ParkList parks={CALIFORNIAPARKS} />
        </ul>
    )
}

export default California;