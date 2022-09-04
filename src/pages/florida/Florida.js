import FLORIDAPARKS from "./FloridaParks";
import ParkList from "../../components/parks/ParkList";
import React from "react";
import classes from '../../components/parks/ParkCard.module.css';

function Florida() {
    return (
        <ul className={classes.cards}>
            <ParkList parks={FLORIDAPARKS} />
        </ul>
    )
}

export default Florida;