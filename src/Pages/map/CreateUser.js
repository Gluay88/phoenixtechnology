import React, { useState, useEffect, useRef } from "react";
import User from "./User";
import Select from "react-select";

const listFromLocalStorage = JSON.parse(
  localStorage.getItem("user-list") || "[]"
);

const CreateUser = () => {
  const [userList, setUserList] = useState(listFromLocalStorage);
  const [newUser, setNewUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const addUser = () => {
    const user = {
      id: userList.length === 0 ? 1 : userList[userList.length - 1].id + 1,
      userName: newUser,
    };
    setUserList([...userList, user]);
  };

  const deleteUser = (id) => {
    setUserList(userList.filter((user) => user.id !== id));
  };

  useEffect(() => {
    localStorage.setItem("user-list", JSON.stringify(userList));
  }, [userList]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setNewUser("");
    setEmail("");
    setPassword("");
  };

  const options = [
    { value: 4, label: "Integrator" },
    { value: 3, label: "Admin" },
    { value: 2, label: "User" },
    { value: 1, label: "Viewer" },
  ];

  return (
    <>
      <h4>ALL USERS</h4>
      <form className="form-create-user" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="username"
          required
          onChange={(e) => setNewUser(e.target.value)}
          value={newUser}
        />
        <input
          type="email"
          placeholder="email"
          required
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input
          type="password"
          placeholder="password"
          required
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <div className="select-section">
          <Select options={options} placeholder="Permission level.." />
        </div>
        {newUser && email && password ? (
          <button onClick={addUser}>Add A User</button>
        ) : (
          <button className="disable-btn" title="Please fill out the form">
            Add A User
          </button>
        )}
      </form>
      <div>
        {userList.map((user, index) => {
          return (
            <div key={user.id}>
              <User
                userName={user.userName}
                id={user.id}
                deleteUser={deleteUser}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default CreateUser;
