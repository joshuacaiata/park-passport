import LandList from "../../components/lands/LandList";
import CALIFADVENTURELANDS from "./CInfo";

function CaliforniaAdventure() {
    return (
        <section>
            <ul>
                <h1>California Adventure</h1>
                <LandList lands={CALIFADVENTURELANDS}/>
            </ul>
        </section>
    )
}

export default CaliforniaAdventure;