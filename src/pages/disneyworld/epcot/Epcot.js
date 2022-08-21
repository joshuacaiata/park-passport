import LandList from "../../../components/lands/LandList";
import EPCOTLANDS from "./Info.js";

function Epcot() {
    return (
        <section>
            <ul>
                <h1>Epcot</h1>
                <LandList lands={EPCOTLANDS} />
            </ul>
        </section>
    )
}

export default Epcot;

/*
import LandList from "../../../components/lands/LandList";
import HOLLYWOODSTUDIOSLANDS from "./Info.js";

function HollywoodStudios() {
    return (
        <section>
            <ul>
                <h1>Hollywood Studios</h1>
                <LandList lands={HOLLYWOODSTUDIOSLANDS} />
            </ul>
        </section>
    )
}

export default HollywoodStudios;
*/