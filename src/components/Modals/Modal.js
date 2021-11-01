import React from "react";
import { Card } from "../Containers/Card";
import styles from "./Modal.module.css";

export const Modal = (props) => {
  const clickHandler = () => {
    props.setShowModal("");
  };

  return (
    <div>
      <div className={styles.backdrop} onClick={clickHandler}/>
      <Card style={styles.modal}>
        <div className={styles.header}>
          <h2>{props.title}</h2>
        </div>

        <div className={styles.content}>
          <p>{props.message}</p>
        </div>

        <div className={styles.actions}>
          <button onClick={clickHandler}>Okay</button>
        </div>
      </Card>
    </div>
  );
};
