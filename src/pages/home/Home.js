import LocationList from '../../components/locations/LocationList';
import React from 'react';
import LOCATIONS from '../../components/locations/Locations';
import InfoCard from '../../components/InfoCard';

function HomePage() {
    return (
        <div>
            <InfoCard />
            <LocationList locations={LOCATIONS}/>
        </div>
    );
}

export default HomePage;

