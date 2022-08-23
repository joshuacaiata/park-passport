import classes from "./Land.module.css"
import RideList from "../rides/RideList";

function Land(props) {
    return (
        <div>
            <h3>{props.name}</h3>
            <RideList rides={props.rides} />
        </div>
    )
}

export default Land;