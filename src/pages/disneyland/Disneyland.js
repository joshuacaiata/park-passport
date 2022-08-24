import LandList from "../../components/lands/LandList";
import DISNEYLANDLANDS from "./Info";
import React from 'react';
import classes from '../Pages.module.css';

function Disneyland(props) {
    return (
        <div className={classes.parklist}>
            <h1>Disneyland</h1>
            <LandList total={props.total} inc={props.inc} dec={props.dec} lands={DISNEYLANDLANDS}/>
        </div>
    )
}

export default Disneyland;