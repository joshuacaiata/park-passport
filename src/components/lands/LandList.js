import classes from './LandList.module.css';
import Land from './Land';
import React from 'react';

function LandList(props) {
    return (
        <ul className={classes.list}>
            {props.lands.map(land =>
                <Land
                    name={land.name}
                    rides={land.rides} />
            )}
        </ul>
    )
}

export default LandList;