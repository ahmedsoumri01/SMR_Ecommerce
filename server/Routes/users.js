const express = require("express");
const router = express.Router();
const User = require("../models/userSchema");

//fetch all users from the database
router.get("/users", async (req, res) => {
  const { userName } = req.query;
  /* console.log("user", userName); */
  let userData;
  userData = await User.find().select("-__v");

  res.status(200).json({ data: userData });
});

// Add a new product
router.post("/users", async (req, res) => {
  const {
    userName,
    email,
    password,
    confirmPassword,
    orders,
    cart,
    userFirebase,
  } = req.body;

  if (!userName || !email || !password || !confirmPassword) {
    /* console.log("new user", userName, email, password, confirmPassword); */
    res.status(400).json({ message: "Please fill all the fields" });
  } else {
    try {
      const isAlreadyExists = await User.findOne({
        email: email,
      });
      if (isAlreadyExists) {
        res.status(403).json({ message: "Product already exists" });
      } else {
        const newUser = new User({
          userName,
          email,
          password,
          confirmPassword,
          orders,
          cart,
          userFirebase,
        });
        await newUser.save();
        res
          .status(201)
          .json({ data: newUser, message: "user add successfully" });
      }
    } catch (error) {
      res.status(400).json({ message: "Oops, Something went wrong!" });
      console.error(error);
    }
  }
});

module.exports = router;
