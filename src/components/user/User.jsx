import React, { useState, useEffect } from "react";
import axios from "axios";

const userInfo = (user) => {
  return (
    <div className="container text-center">
      <div className="row">
        <div className="col">
          <div className="card my-3">
            <div className="card-body">
              <h5 className="card-title">Name: {user.name}</h5>
              <p className="card-text">Email: {user.email}</p>
              <p className="card-text">Phone: {user.phone}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const User = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const { data } = await axios.get("https://jsonplaceholder.typicode.com/users/");
    setUsers(data);
  };

  return (
    <>
      <br />
      <div className="mt-3">
        <h2 className="text-center">Total Users : {users.length}</h2>
        <p className="text-center">
          This data is fetching from{" "}
          <strong>
            <em>jsonplaceholder.typicode.com/users</em>
          </strong>
        </p>
        {users.map((user) => (
          <div key={user.id}>{userInfo(user)}</div>
        ))}
      </div>
    </>
  );
};

export default User;
