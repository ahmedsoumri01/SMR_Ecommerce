const express = require("express");
const router = express.Router();
const User = require("../models/userSchema");

// Fetch all users
router.get("/users", async (req, res) => {
  const usersData = await User.find().select("-__v");
  res.status(200).json({ data: usersData });
});

// Fetch individual user
/* router.get("/users/:id", async (req, res) => {
  const { id } = req.params;
  const singleUserData = await User.findById(id).select("-__v");
  singleUserData
    ? res.status(200).json({ data: singleUserData })
    : res.status(400).json({ error: "Oops, Something went wrong!!" });
}); */

// Add a new user
/* router.post("/users", async (req, res) => {
  const { name, email, confirmPassword, password } = req.body;
  if (!name || !email || !confirmPassword || !password) {
    res.status(400).json({ message: "Please fill all the fields" });
  } else {
    try {
      const isAlreadyExists = await User.findOne({
        email: email,
      });
      if (isAlreadyExists) {
        res.status(403).json({ message: "email already exists" });
      } else {
        const newUser = new User({
          name,
          email,
          confirmPassword,
          password,
        });
        await newUser.save();
        res
          .status(201)
          .json({ data: newUser, message: "newUser created successfully" });
      }
    } catch (error) {
      res.status(400).json({ message: "Oops, Something went wrong!" });
      console.error(error);
    }
  }
}); */
