import LandList from "../../../components/lands/LandList";
import MAGICKINGDOMLANDS from "./Info";
import React from 'react';
import classes from '../../Pages.module.css';

function MagicKingdom() {
    return (
        <div className={classes.parklist}>
            <h1>Magic Kingdom</h1>
            <LandList lands={MAGICKINGDOMLANDS} />
        </div>
    )
}

export default MagicKingdom;