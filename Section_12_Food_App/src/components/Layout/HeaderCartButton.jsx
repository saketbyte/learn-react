import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  return (
    <button className={classes.button} onClick={props.onClick}>
      {/* 3 things required: icon, text and the badge */}
      <span className={classes.icon}>
        <CartIcon />
        {/* The above component is all in all an SVG file. */}
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}> 2 </span>
    </button>
  );
};

export default HeaderCartButton;
