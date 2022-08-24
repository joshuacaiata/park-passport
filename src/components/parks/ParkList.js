import ParkCard from "./ParkCard";
import React from 'react';

function ParkList(props) {
    return (
        <div>
            {props.parks.map(park => 
                <ParkCard name={park.name} location={park.location} img={park.img} alt={park.alt} linkto={park.linkto}/>)}
        </div>
    )
}

export default ParkList;