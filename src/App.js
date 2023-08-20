import React, { useState } from "react";

import AddUser from "./components/AddUser/AddUser";
import Button from "./components/Button/Button";
import Card from "./components/Card/Card";
import ErrorModal from "./components/ErrorModal/ErrorModal";
import UsersList from "./components/UsersList/UsersList";

function App() {
  return (
    <div>
      <AddUser />
      <Button />
      <Card />
      <ErrorModal />
      <UsersList />
    </div>
  );
}

export default App;
