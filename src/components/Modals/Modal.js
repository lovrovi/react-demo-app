import React from "react";

export const Modal = (props) => {
  const clickHandler = () => {
    props.setShowModal("");
  };

  return (
    <div>
      <h2>{props.title}</h2>
      <p>{props.message}</p>
      <button onClick={clickHandler}>Okay</button>
    </div>
  );
};
