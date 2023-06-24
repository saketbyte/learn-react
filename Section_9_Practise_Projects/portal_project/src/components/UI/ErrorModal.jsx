import React from "react";
import classes from "./ErrorModal.module.css";
import Card from "./Card";
import Button from "./Button";

const ErrorModal = (props) => {
  return (
    <div>
      <div className={classes.backdrop} onClick={props.removeModal} />
      <Card cssClass={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>

        <div className={classes.content}>
          <p>{props.message}</p>
        </div>

        <footer className={classes.actions}></footer>
        <Button classes={classes.actions} onClick={props.removeModal}>
          Okay
        </Button>
      </Card>
    </div>
  );
};

export default ErrorModal;
