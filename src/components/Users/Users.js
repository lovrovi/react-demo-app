import React from "react";
import { Card } from "../Containers/Card";

export const Users = (props) => {
  return (
    <Card>
      {props.users.map((user) => {
        return (
          <div key={user.id}>
            {user.name} ({user.age} years old)
          </div>
        );
      })}
    </Card>
  );
};
