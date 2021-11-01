import React from "react";
import ReactDom from "react-dom";
import { Card } from "../Containers/Card";
import styles from "./Modal.module.css";

const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={() => props.action("")} />;
};

const ErrorModal = (props) => {
  return (
    <Card style={styles.modal}>
      <div className={styles.header}>
        <h2>{props.title}</h2>
      </div>

      <div className={styles.content}>
        <p>{props.message}</p>
      </div>

      <div className={styles.actions}>
        <button onClick={() => props.action("")}>Okay</button>
      </div>
    </Card>
  );
};

export const Modal = (props) => {
  /* const clickHandler = () => {
    props.setShowModal("");
  }; */

  return (
    <>
      {ReactDom.createPortal(
        <Backdrop action={props.setShowModal} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDom.createPortal(
        <ErrorModal
          title={props.title}
          message={props.message}
          action={props.setShowModal}
        />,
        document.getElementById("overlay-root")
      )}
    </>
  );
};
