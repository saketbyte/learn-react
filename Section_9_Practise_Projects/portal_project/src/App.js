import React from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";
import { useState } from "react";

function App() {
  const [data, setData] = useState([]);

  const onAddUserHandler = (uName, uAge) => {
    setData((prevData) => {
      return [...prevData, { uid: Math.random().toString(), name: uName, age: uAge }];
    });
  };

  return (
    <div>
      <AddUser onAddUser={onAddUserHandler} />
      <UsersList users={data} />
    </div>
  );
}

export default App;
