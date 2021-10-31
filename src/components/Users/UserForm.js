import React, {useState} from "react";
import { Card } from "../Containers/Card";

export const UserForm = (props) => {
    const [username, setUsername] = useState("")
    const [age, setAge] = useState("")

    const submitUserHandler = (e) => {
        e.preventDefault();
        const newUser = {
            id : Math.random().toString(),
            name : username,
            age : age
        }
        props.onUserCreate(newUser)
    }

    const onUsernameChangeHandler = (e) => {
      setUsername(e.target.value)
    }

    const onAgeChangeHandler = (e) => {
      setAge(e.target.value)
    }

  return (
    <Card>
      <form onSubmit={submitUserHandler}>
        <label>Username</label>
        <input type="text" onChange={onUsernameChangeHandler} value={username}/>
        <label>Age (Years)</label>
        <input type="text" onChange={onAgeChangeHandler} value={age}/>
        <button type="submit">Add user</button>
      </form>
      
    </Card>
  );
};
