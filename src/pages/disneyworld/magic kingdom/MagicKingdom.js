import LandList from "../../../components/lands/LandList";
import MAGICKINGDOMLANDS from "./Info";
import React from 'react';
import classes from '../../Pages.module.css';

function MagicKingdom(props) {
    return (
        <div className={classes.parklist}>
            <h1>Magic Kingdom</h1>
            <LandList total={props.total} inc={props.inc} dec={props.dec} lands={MAGICKINGDOMLANDS} />
        </div>
    )
}

export default MagicKingdom;