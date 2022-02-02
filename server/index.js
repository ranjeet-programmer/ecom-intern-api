const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());

app.use(cors());

require("dotenv").config();

mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
  })
  .then(() => console.log("DB Connection Successfully done"))
  .catch((err) => console.log(`DB Connection Error ${err}`));

// routes

const { registerUser, loginUser } = require("./controller/auth");

app.post("/register", registerUser);

app.post("/login", loginUser);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server is running on port ${port}`));
