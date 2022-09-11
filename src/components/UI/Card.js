import React from "react";

import classes from "./Card.module.css"

//general ui components (wrapper comonents) for any content needed

const Card = props => {
    return <div className={classes.card}>{props.children}</div>
}

export default Card