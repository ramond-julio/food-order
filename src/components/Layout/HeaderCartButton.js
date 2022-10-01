import React, { useContext, useEffect, useState } from "react";

import classes from "./HeaderCartButton.module.css";
import cartContext from "../../store/cart-context";
import CartIcon from "../Carts/CartIcon";

const HeaderCartButton = (props) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const cartCtx = useContext(cartContext);

  //destructuring object to access items from Cart Context
  const { items } = cartCtx;
  //reduce is built in method to transform array of data to a single value (number in this case)
  const numberOfCartItems = items.reduce((currentNumber, item) => {
    return currentNumber + item.amount
  }, 0);

  

  const btnClassess = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`;

  useEffect(() => {
    //change button classes to include bump animation class and set timer to remove class again so when added
    //again in the future it place bump
    if(items.length === 0){
      return;
    }
    setBtnIsHighlighted(true);
    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    //cleanup function to remove timer
    //return function in useEffect called automatically as a cleanup function by React
    return () => {
      //when this effect reruns it clear the timer
      //need here because timer can be set up again before it expires
      //if add multiple items rapidly after each other, it clear the old timer and make sure the new timer is set
      //and the old timer is cleared
      clearTimeout(timer);
    }
  }, [items])

  return (
    <button className={btnClassess} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
