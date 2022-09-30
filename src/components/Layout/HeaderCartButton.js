import React, { useContext } from "react";

import classes from "./HeaderCartButton.module.css";
import cartContext from "../../store/cart-context";
import CartIcon from "../Carts/CartIcon";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(cartContext);
  //reduce is built in method to transform array of data to a single value (number in this case)
  const numberOfCartItems = cartCtx.items.reduce((currentNumber, item) => {
    return currentNumber + item.amount
  }, 0);

  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
