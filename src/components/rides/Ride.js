import Card from "../layout/Card";
import classes from './Ride.module.css';
import React from 'react';

import { useState } from 'react';

function Ride(props) {

    const [rideCount, setRideCount] = useState(0);

    const incrementCount = () => {
        setRideCount(rideCount + 1);
    }

    const decrementCount = () => {
        if (rideCount > 0) {
            setRideCount(rideCount - 1);
        }
    }

    return (
        <li className={classes.item}>
            <Card>
                <div className={classes.content}>
                    <h3>{props.name}</h3>
                    <div className={classes.count}>
                        <button 
                            className={classes.button}
                            onClick={incrementCount}>+</button>
                        {rideCount}
                        <button 
                            className={classes.button}
                            onClick={decrementCount}>-</button>
                    </div>
                </div>
            </Card>
        </li>
    )
}

export default Ride;