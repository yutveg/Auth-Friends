import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const Login = props => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: ""
  });

  const handleInputs = e => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
    console.log(e.target.name);
  };

  const handleLogin = e => {
    console.log(credentials);
    e.preventDefault();
    axiosWithAuth()
      .post("/login", credentials)
      .then(res => {
        localStorage.setItem("token", res.data.payload);
        props.history.push("/friends");
      })
      .catch(err => console.log(err));
  };

  return (
    <form className="login-form" onSubmit={handleLogin}>
      <label>Username:</label>
      <input
        type="text"
        name="username"
        placeholder="username.."
        value={credentials.username}
        onChange={handleInputs}
      />
      <label>Password:</label>
      <input
        type="password"
        name="password"
        placeholder="password.."
        value={credentials.password}
        onChange={handleInputs}
      />
      <button type="submit">Log In</button>
    </form>
  );
};

export default Login;
