import classes from '../parks/ParkCard.module.css'
import { Link } from 'react-router-dom';
import React from 'react';

function LocationCard(props) {
    return (
        <Link to={props.linkto}>
            <div className={classes.card}>
                <div className={classes.image}>
                    <img src={props.img} alt={props.alt} />
                </div>
                <div className={classes.info}>
                    <div className={classes.parkName}>{props.name}</div>
                    <div className={classes.parkLocation}>{props.country}</div>
                </div>
            </div>
        </Link>
    )
}

export default LocationCard;