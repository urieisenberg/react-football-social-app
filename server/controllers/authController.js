const User = require("../models/userModel");
const validateRegistration = require("../validations/registerSchema");
const validateLogin = require("../validations/loginSchema");
const { comparePassword, generatePassword } = require("../config/bcrypt");
const { generateToken, verifyToken } = require("../config/token");

//register
const registerUser = async (req, res) => {
  try {
    const { error } = validateRegistration(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const { username, email, password, team } = req.body;

    const emailExists = await User.findOne({ email });
    const usernameExists = await User.findOne({ username });
    if (emailExists) return res.status(400).send("Email already exists");
    if (usernameExists) return res.status(400).send("Username already exists");

    const hashedPassword = await generatePassword(password);

    const user = await User.create({
      username,
      email,
      password: hashedPassword,
      team,
    });

    if (user) {
      res.status(201).json({
        _id: user._id,
        username: user.username,
        email: user.email,
        team: user.team,
        follows: user.follows,
        followed: user.followed,
        profilePicture: user.team.logo,
        isAdmin: user.isAdmin,
        fixtures: user.fixtures,
        token: generateToken(user._id),
      });
    }
  } catch (err) {
    return res.status(500).send(err);
  }
};

//login
const loginUser = async (req, res) => {
  try {
    const { error } = validateLogin(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (user && (await comparePassword(password, user.password))) {
      res.status(200).json({
        _id: user._id,
        username: user.username,
        email: user.email,
        team: user.team,
        profilePicture: user.profilePicture,
        follows: user.follows,
        followed: user.followed,
        fixtures: user.fixtures,
        isAdmin: user.isAdmin,
        token: generateToken(user._id),
      });
    } else {
      res.status(400).send("Email or password is incorrect");
    }
  } catch (err) {
    return res.status(401).send("Something went wrong");
  }
};



module.exports = {
  registerUser,
  loginUser,
};
