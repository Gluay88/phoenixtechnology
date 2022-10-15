import React, { useState, useEffect } from "react";
import User from "./User";

const listFromLocalStorage = JSON.parse(
  localStorage.getItem("user-list") || "[]"
);

const CreateUser = () => {
  const [userList, setUserList] = useState(listFromLocalStorage);
  const [newUser, setNewUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (e) => {
    setUserList(e.target.value);
  };
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
          <select defaultValue={"DEFAULT"}>
            <option value="DEFAULT" disabled>
              Permission level..
            </option>
            <option value={4}>Integrator</option>
            <option value={3}>Admin</option>
            <option value={3}>User</option>
            <option value={1}>Viewer</option>
          </select>
        </div>
        <button onClick={addUser}>Add A User</button>
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
