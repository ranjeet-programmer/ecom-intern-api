import React, { useState } from "react";
import "./register.css";
import { registerNewUser } from "../../functions/auth";

const Register = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    reEnterPassword: "",
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
    const { name, email, password, reEnterPassword } = user;

    if (name && email && password && password === reEnterPassword) {
      await registerNewUser(user).then((res) => {
        console.log(res);
      });
    } else {
      alert("Please fill all the fields");
    }
  };

  return (
    <div className="register">
      <h1>Register</h1>
      <input
        type="text"
        name="name"
        value={user.name}
        placeholder="Enter your name"
        onChange={handleChange}
      />
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
      <input
        type="password"
        name="reEnterPassword"
        value={user.reEnterPassword}
        placeholder="Confirm password"
        onChange={handleChange}
      />
      <button className="button" onClick={handleSubmit}>
        Register
      </button>
      <div>or</div>
      <div className="button">Login</div>
    </div>
  );
};

export default Register;
