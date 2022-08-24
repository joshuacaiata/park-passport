import CALIFORNIAPARKS from "./CaliforniaParks";
import ParkList from '../../components/parks/ParkList';
import React from "react";

function California() {
    return (
        <div>
            <ParkList parks={CALIFORNIAPARKS} />
        </div>
    )
}

export default California;