import React from "react";

import classes from "./Input.module.css";

const Input = (props) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      {/* spread operator on element make sure props.input.id is being added for example */}
      <input {...props.input} />
    </div>
  );
};

export default Input;
