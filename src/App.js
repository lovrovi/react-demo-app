import React, { useState } from "react";
import { Modal } from "./components/Modals/Modal";
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

  const [showModal, setShowModal] = useState("");

  const addNewUser = (newUser) => {
    setUserList((prevState) => {
      return [...prevState, newUser];
    });
    console.log(newUser);
  };

  return (
    <div>
      {showModal && <Modal title={showModal.title}  message={showModal.message} setShowModal={setShowModal}/>}
      <UserForm onUserCreate={addNewUser} setShowModal={setShowModal} />
      <Users users={userList} />
    </div>
  );
};

export default App;
