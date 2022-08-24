import LocationList from '../../components/locations/LocationList';
import React from 'react';
import LOCATIONS from '../../components/locations/Locations';
import InfoCard from '../../components/InfoCard';

function HomePage(props) {
    return (
        <div>
            <InfoCard  total={props.total}/>
            <LocationList locations={LOCATIONS}/>
        </div>
    );
}

export default HomePage;

