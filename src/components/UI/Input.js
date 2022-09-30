import React, { forwardRef } from "react";

import classes from "./Input.module.css";

const Input = forwardRef((props, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      {/* spread operator on element make sure props.input.id is being added for example */}
      <input ref={ref} {...props.input} />
    </div>
  );
});

export default Input;
