import LandList from "../../components/lands/LandList";
import CALIFADVENTURELANDS from "./CInfo";
import React from 'react';
import classes from '../Pages.module.css';

function CaliforniaAdventure(props) {
    return (
        <div className={classes.parklist}>
            <h1>California Adventure</h1>
            <LandList total={props.total} inc={props.inc} dec={props.dec} lands={CALIFADVENTURELANDS}/>
        </div>
    )
}

export default CaliforniaAdventure;