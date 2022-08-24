import LandList from "../../components/lands/LandList";
import CALIFADVENTURELANDS from "./CInfo";
import React from 'react';
import classes from '../Pages.module.css';

function CaliforniaAdventure() {
    return (
        <div className={classes.parklist}>
            <h1>California Adventure</h1>
            <LandList lands={CALIFADVENTURELANDS}/>
        </div>
    )
}

export default CaliforniaAdventure;