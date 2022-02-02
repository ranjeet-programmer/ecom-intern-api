import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

import { loginUser } from "../../functions/auth";

const Login = ({ setLoginUser }) => {
  const navigate = useNavigate();
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

    await loginUser(user)
      .then((res) => {
        alert(res.data.message);
        setLoginUser(res.data.user);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="login">
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
      <div className="button" onClick={() => navigate("/register")}>
        Register
      </div>
    </div>
  );
};

export default Login;
