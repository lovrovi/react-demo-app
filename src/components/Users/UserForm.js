import React, { useState } from "react";
import { Card } from "../Containers/Card";
import styles from './UserForm.module.css'

export const UserForm = (props) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");

  const submitUserHandler = (e) => {
    e.preventDefault();
    if (username.length === 0 || age.length === 0) {
      props.setShowModal({
        title: "Error",
        message: "Must enter valid username and age",
      });
    } else if (+age < 0) {
      props.setShowModal({
        title: "Error",
        message: "Age must be greater than zero",
      });
    } else {
      const newUser = {
        id: Math.random().toString(),
        name: username,
        age: age,
      };
      props.onUserCreate(newUser);
      setAge("");
      setUsername("");
    }
  };

  const onUsernameChangeHandler = (e) => {
    setUsername(e.target.value);
  };

  const onAgeChangeHandler = (e) => {
    setAge(e.target.value);
  };

  return (
    <Card style={styles.card}>
      <form className={styles.form} onSubmit={submitUserHandler}>
        <label>Username</label>
        <input
          type="text"
          onChange={onUsernameChangeHandler}
          value={username}
        />
        <label>Age (Years)</label>
        <input type="text" onChange={onAgeChangeHandler} value={age} />
        <button type="submit">Add user</button>
      </form>
    </Card>
  );
};
