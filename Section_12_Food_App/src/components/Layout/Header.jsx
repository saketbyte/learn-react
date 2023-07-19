import { Fragment } from "react";
import mealsImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      {/* Title of website section */}
      <header className={classes.header}>
        <h1> koi Meal Gaya! </h1>
        <HeaderCartButton />
      </header>
      {/* sidebar section of header */}
      <div className={classes["main-image"]}>
        {/* We did so because there is a hyphen in between the name */}
        <img src={mealsImage} alt="A Dining table"></img>
      </div>
    </Fragment>
  );
};

export default Header;
