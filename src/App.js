import React, { useState } from "react";
import "./styles.css";
import Button from "./Button/Button";
import Search from "./Search/Search";
import Users from "./Users/Users";

export default function App() {
  const [users, setUsers] = useState([]);

  const url = "https://randomuser.me/api/";
  const handleClick = async () => {
    const res = await fetch(url, { method: "GET" });
    const data = await res.json();
    console.log(data);
    setUsers([...users, data.results[0]]);
  };
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <Button value={"create user"} handleClick={handleClick} />
      <Button value={"search user"} />
      <Search />
      <Users allUsers={users} />
    </div>
  );
}
