import React from "react";
import styles from "./Card.module.css";

export const Card = (props) => {
  return (
        <div className={`${styles.card} ${props.style}`}>
            {props.children}
        </div>
    );
};
