import React, { useState, useEffect } from "react";
import Friend from "./Friend";
import axios from "axios";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const Friends = () => {
  const [friends, setFriends] = useState([]);
  useEffect(() => {
    axiosWithAuth()
      .get("/friends")
      .then(res => setFriends(res.data))
      .catch(err => console.log(err));
  });

  return (
    <div>
      <h1>FRIENDS OF FRIENDS</h1>
      <div className="friends-container">
        {friends.map(friend => (
          <Friend key={friend.name} friend={friend} />
        ))}
      </div>
    </div>
  );
};

export default Friends;
