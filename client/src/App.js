import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage/Homepage.js";
import Login from "./components/Login/Login.js";
import Register from "./components/Register/Register.js";
import { useState } from "react";
function App() {
  const [user, setLoginUser] = useState({});
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={
              user && user._id ? (
                <Homepage />
              ) : (
                <Login setLoginUser={setLoginUser} />
              )
            }
          />

          <Route exact path="/register" element={<Register />} />
          <Route
            exact
            path="/login"
            element={<Login setLoginUser={setLoginUser} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
