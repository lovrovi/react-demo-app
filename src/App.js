import React, { useState } from "react";
import { UserForm } from "./components/Users/UserForm";
import { Users } from "./components/Users/Users";

const App = () => {
  const [userList, setUserList] = useState([
    {
      id: Math.random().toString(),
      name: "Max",
      age: 31,
    },
  ]);

  const addNewUser = (newUser) => {
    setUserList((prevState) => {
      return [...prevState, newUser];
    });
    console.log(newUser);
  };

  /* let userList = [
    {
      id: Math.random().toString(),
      name: "Max",
      age: 31,
    },
  ]; */

  return (
    <div>
      <UserForm onUserCreate={addNewUser} />
      <Users users={userList} />
    </div>
  );
};

export default App;
