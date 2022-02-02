const User = require("../model/user");

exports.registerUser = async (req, res) => {
  const { email, password } = req.body;

  const alreadyUser = await User.findOne({ email: email });

  if (alreadyUser) {
    res.send({ message: "User already exists" });
  } else {
    const user = await new User({
      email: email,
      password: password,
    }).save();

    res.send({ message: "user registered successfully" });
  }
};
