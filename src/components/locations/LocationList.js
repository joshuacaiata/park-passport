import LocationCard from "./LocationCard";
import React from "react";

function LocationList(props) {
    return (
        <div>
            {props.locations.map(location =>
                <LocationCard name={location.name} country={location.country} img={location.img} linkto={location.linkto}/>)}
        </div>
    )
}

export default LocationList;