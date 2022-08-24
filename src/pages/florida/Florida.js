import FLORIDAPARKS from "./FloridaParks";
import ParkList from "../../components/parks/ParkList";
import React from "react";

function Florida() {
    return (
        <div>
            <ParkList parks={FLORIDAPARKS} />
        </div>
    )
}

export default Florida;