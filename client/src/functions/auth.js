import axios from "axios";

export const registerNewUser = async (user) => {
  return await axios.post("http://localhost:8000/register", user);
};

export const loginUser = async (user) => {
  return await axios.post("http://localhost:8000/login", user);
};
