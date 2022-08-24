import Card from "../layout/Card";
import classes from './Ride.module.css';
import React from 'react';

import { useState, useEffect } from 'react';

function Ride(props) {

    const [rideCount, setRideCount] = useState(() => {
        const saved = localStorage.getItem(props.name);
        const initialVal = JSON.parse(saved);
        return initialVal || 0;
    });

    useEffect(() => {
        localStorage.setItem(props.name, JSON.stringify(rideCount));
    })

    const incrementCount = () => {
        setRideCount(rideCount + 1);
        props.inc()
    }

    const decrementCount = () => {
        if (rideCount > 0) {
            setRideCount(rideCount - 1);
        }

        if (props.total > 0) {
            props.dec()
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