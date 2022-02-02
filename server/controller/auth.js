const User = require("../model/user");

exports.registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  const alreadyUser = await User.findOne({ email: email });

  if (alreadyUser) {
    res.send({ message: "User already exists" });
  } else {
    const user = await new User({
      name: name,
      email: email,
      password: password,
    }).save();

    res.send({ message: "user registered successfully" });
  }
};

exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email: email });

  if (user) {
    if (password === user.password) {
      res.send({ message: "user logged in successfully", user: user });
    } else {
      res.send({ message: "please enter valid email and password" });
    }
  } else {
    res.send({ message: "please enter valid email and password" });
  }
};
