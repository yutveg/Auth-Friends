import React from "react";
import axios from "axios";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const Friend = props => {
  const deleteFriend = () => {
    console.log(props.friend.id);
    axiosWithAuth()
      .delete(`http://localhost:5000/api/friends/${props.friend.id}`)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  return (
    <div className="friend">
      <h1>{props.friend.name}</h1>
      <h2>{props.friend.age}</h2>
      <button onClick={deleteFriend}>X</button>
    </div>
  );
};

export default Friend;
