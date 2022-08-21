import LandList from "../../components/lands/LandList";
import DISNEYLANDLANDS from "./Info";

function Disneyland() {
    return (
        <section>
            <ul>
                <h1>Disneyland</h1>
                <LandList lands={DISNEYLANDLANDS}/>
            </ul>
        </section>
    )
}

export default Disneyland;