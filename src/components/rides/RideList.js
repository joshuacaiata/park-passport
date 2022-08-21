import classes from './RideList.module.css';
import Ride from './Ride';

function RideList(props) {
    return ( 
        <ul className={classes.list}>
            {props.rides.map(ride =>
                <Ride
                    name={ride.name}
                    count={ride.count} />
            )}
        </ul>
    )
}

export default RideList;