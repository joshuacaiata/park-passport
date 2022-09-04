import React from "react";
import classes from './InfoCard.module.css'

function InfoCard(props) {
    return (
        <div className={classes.info_card}>
            <div className={classes.content}>
                <h1>Welcome to Park Passport!</h1>
                <p>
                    Please select the location you would like to visit, and then the park.
                    Use this website to track the rides you've been on!
                </p>
                <p className={classes.displayRides}>
                    Rides you've been on so far: <div className={classes.ridesBanner}>{props.total}</div>
                </p>
            </div>
        </div>
    )
}

export default InfoCard;