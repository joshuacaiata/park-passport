import classes from './RideList.module.css';
import Ride from './Ride';
import React from 'react';

function RideList(props) {
    return ( 
        <ul className={classes.list}>
            {props.rides.map(ride =>
                <Ride
                    total={props.total}
                    inc={props.inc}
                    dec={props.dec}
                    name={ride.name}
                    count={ride.count} />
            )}
        </ul>
    )
}

export default RideList;