const express = require("express");
const router = express.Router();

require("dotenv").config();
const shortid = require("shortid");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const e = require("express");

router.use(express.json());
router.use(express.urlencoded({ extended: true }));


const EXAMPLE_PWD_1 =
  "$2b$10$KviHuzPgLc9joD.H6v3.Vu.VSoL6ZdplPIApQqnud/8wHc6Dn3ciC";

// example user, password is "1"
let users = [
  {
    uid: "1",
    username: "Bob",
    password: EXAMPLE_PWD_1,
  },
];

// get all users, just for testing
router.get("/", (req, res) => {
  res.status(200).json({ message: "Get users success", data: users });
});

// Register new user: { username, password }
router.post("/", async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    res.status(400).json({ message: "Require username and password" });
  }

  const userExists = users.find((user) => user.username === username);
  if (userExists) {
    res.status(409).json({ message: "Username already exists" });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = {
      uid: shortid.generate(),
      username,
      password: hashedPassword,
    };
    users.push(newUser);
    res.status(201).json({
      message: "User registered successfully",
      data: { uid: newUser.uid, username: newUser.username },
    });
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: "Internal server error" });
  }
});

// Login using {username, password}, send JWT token (expires in 1h)
router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    res.status(400).json({ message: "Require username and password" });
  }
  const user = users.find((user) => user.username === username);
  if (!user) {
    return res.status(401).json({ message: "User not exists" });
  }

  try {
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(401).json({ message: "Wrong password" });
    }
    const accessToken = jwt.sign(
      { uid: user.uid, username: user.username },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "1h" }
    );
    res.status(200).json({ message: "Login success", accessToken });
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
