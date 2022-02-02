import "./App.css";
import { BrowserRouter, Router, Route } from "react-router-dom";
import Homepage from "./components/Homepage/Homepage.js";
import Login from "./components/Login/Login.js";
import Register from "./components/Register/Register.js";

function App() {
  return (
    <div className="App">
      <Register />
    </div>
  );
}

export default App;
