const User = require("../models/User");
var bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  const { email, password, name, phone } = req.body;
  try {
    //check existance user
    const isExist = await User.findOne({ email });
    if (isExist)
      return res.status(400).json({ err: "you are already registred" });
    // Create new user
    let newUser = new User({
      email,
      password,
      name,
      phone,
    });
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(newUser.password, salt);
    newUser.password = hash;
    newUser = await newUser.save();
    const payload = { _id: newUser._id };
    var token = jwt.sign(payload, process.env.SECRET_KEY);
    res.send({
      user: { name: newUser.name, phone: newUser.phone, email: newUser.email },
      token,
    });
  } catch (error) {
    res.staus(500).send({ err: error.message });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    //check existance user
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ err: "wrong email" });
    // check password
    const isMatch = await bcrypt.compare(password, user.password);
    console.log(isMatch);
    if (!isMatch) return res.status(401).json({ err: "Wrong password" });
    const payload = { _id: user._id };
    var token = jwt.sign(payload, process.env.SECRET_KEY);
    res.send({
      user: { name: user.name, phone: user.phone, email: user.email },
      token,
    });
  } catch (error) {
    res.status(500).send({ err: error.message });
  }
};

const getProfile = (req,res) => {
     res.send(req.user)
}
module.exports = { register, login , getProfile };
