import React, { useState, useEffect } from "react";
import Friend from "./Friend";
import axios from "axios";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const Friends = () => {
  const [friends, setFriends] = useState([]);
  const [friendValues, setFriendValues] = useState({
    id: Date.now(),
    name: "",
    age: "",
    email: ""
  });

  useEffect(() => {
    axiosWithAuth()
      .get("/friends")
      .then(res => setFriends(res.data))
      .catch(err => console.log(err));
  });

  const handleChange = e => {
    setFriendValues({
      ...friendValues,
      [e.target.name]: e.target.value
    });
  };

  const addNewFriend = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("friends", friendValues)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  return (
    <div className="wrapper">
      <h1>FRIENDS OF FRIENDS</h1>
      <div className="friends-container">
        {friends.map(friend => (
          <Friend key={friend.name} friend={friend} />
        ))}
      </div>
      <form className="friend-form" onSubmit={addNewFriend}>
        <h1>Add A Friend!</h1>
        <label>Name:</label>
        <input
          type="text"
          value={friendValues.name}
          onChange={handleChange}
          placeholder="name.."
          name="name"
        />
        <label>Age: </label>
        <input
          value={friendValues.age}
          onChange={handleChange}
          placeholder="age.."
          name="age"
        />
        <label>Email: </label>
        <input
          value={friendValues.email}
          onChange={handleChange}
          placeholder="email.."
          name="email"
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default Friends;
