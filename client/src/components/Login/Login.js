import React, { useState } from "react";
import "./login.css";
import axios from "axios";
import { loginUser } from "../../functions/auth";
const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await loginUser(user).then((res) => {
      alert(res.data.message);
    });
  };

  return (
    <div className="login">
      {console.log("user", user)}
      <h1>Login</h1>
      <input
        type="email"
        name="email"
        value={user.email}
        placeholder="Enter your email"
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        value={user.password}
        placeholder="Enter your password"
        onChange={handleChange}
      />
      <div className="button" onClick={handleSubmit}>
        Login
      </div>
      <div>or</div>
      <div className="button">Register</div>
    </div>
  );
};

export default Login;
