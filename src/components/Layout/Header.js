import React from "react";

import mealsImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";

const Header = (props) => {
  //classes with - notation can't use . notation
  return (
    <>
      <header className={classes.header}>
        <h1>Meals</h1>
        <button>Cart</button>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="Table full of delicious food!" />
      </div>
    </>
  );
};

export default Header;
