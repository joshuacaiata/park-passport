import LocationCard from "./LocationCard";
import classes from './LocationList.module.css';
import React from "react";

function LocationList(props) {
    return (
        <ul className={classes.cards}>
            {props.locations.map(location =>
                <LocationCard name={location.name} country={location.country} img={location.img} linkto={location.linkto}/>)}
        </ul>
    )
}

export default LocationList;