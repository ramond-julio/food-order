import React from "react";
import MealItemForm from "./MealItemForm";
import classes from "./MealItem.module.css";

const MealItem = (props) => {
  //first $ to output character dollar signs
  //second inject dynamic content to template literals
  const price = `$${props.price.toFixed(2)}`;

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      {/* form to enter the amount meals and add to cart button */}
      <div>
        <MealItemForm />
      </div>
    </li>
  );
};

export default MealItem;
