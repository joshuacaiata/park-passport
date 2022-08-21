import LandList from "../../../components/lands/LandList";
import ANIMALKINGDOMLANDS from "./Info.js";

function AnimalKingdom() {
    return (
        <section>
            <ul>
                <h1>Animal Kingdom</h1>
                <LandList lands={ANIMALKINGDOMLANDS} />
            </ul>
        </section>
    )
}

export default AnimalKingdom;
