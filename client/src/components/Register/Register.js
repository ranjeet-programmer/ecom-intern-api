import React, { useState } from "react";
import "./register.css";
import { registerNewUser } from "../../functions/auth";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
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
        alert(res.data.message);
        navigate("/login");
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
      <div className="button" onClick={handleSubmit}>
        Register
      </div>
      <div>or</div>
      <div className="button" onClick={() => navigate("/login")}>
        Login
      </div>
    </div>
  );
};

export default Register;
