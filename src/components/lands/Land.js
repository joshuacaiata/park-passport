import RideList from "../rides/RideList";
import React from 'react';
import classes from './Land.module.css'

function Land(props) {
    return (
        <div className={classes.landBox}>
            <h3 className={classes.title}>{props.name}</h3>
            <RideList total={props.total} inc={props.inc} dec={props.dec} rides={props.rides} />
        </div>
    )
}

export default Land;