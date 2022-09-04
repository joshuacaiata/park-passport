import classes from '../parks/ParkCard.module.css'
import { Link } from 'react-router-dom';
import React from 'react';

function LocationCard(props) {
    return (
        <li className={classes.card_item}>
            <Link to={props.linkto}>
                <div className={classes.card}>
                    <div className={classes.card_image}>
                        <img src={props.img} alt={props.alt} />
                    </div>
                    <div className={classes.card_content}>
                        <div className={classes.card_title}>{props.name}</div>
                        
                    </div>
                </div>
            </Link>
        </li>
    )
}

export default LocationCard;