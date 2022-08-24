import React from "react";
import classes from './InfoCard.module.css'

function InfoCard() {
    return (
        <div className={classes.card}>
            <div className={classes.content}>
                <h1>Welcome to Park Passport!</h1>
                <p>
                    Please select the location you would like to visit. 
                    Then, select your park, and enter in the number of times you have ridden each ride.
                    This app serves as a handy little tool to keep track of the rides you've been on
                    at various Disney parks!
                </p>
            </div>
        </div>
    )
}

export default InfoCard;