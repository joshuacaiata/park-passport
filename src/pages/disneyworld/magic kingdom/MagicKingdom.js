import LandList from "../../../components/lands/LandList";
import MAGICKINGDOMLANDS from "./Info";

function MagicKingdom() {
    return (
        <section>
            <ul>
                <h1>Magic Kingdom</h1>
                <LandList lands={MAGICKINGDOMLANDS} />
            </ul>
        </section>
    )
}

export default MagicKingdom;