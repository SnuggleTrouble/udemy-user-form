import React, { useState } from "react";

import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (username, userAge) => {
    setUsersList((previousUsersList) => {
      return [
        ...previousUsersList,
        { name: username, age: userAge, id: Math.random().toString() },
      ];
    });
  };

  const deleteUserHandler = (userId) => {
    setUsersList((previousUsersList) => {
      const updatedUser = previousUsersList.filter(
        (user) => user.id !== userId
      );
      return updatedUser;
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList
        users={usersList}
        onDeleteUser={deleteUserHandler}
      />
    </div>
  );
}

export default App;
