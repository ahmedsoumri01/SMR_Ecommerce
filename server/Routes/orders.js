const express = require("express");
const router = express.Router();
const Order = require("../models/orderSchema");

// Get all orders
router.get("/orders", async (req, res) => {
  try {
    const orders = await Order.find();
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create a new order
router.post("/orders", async (req, res) => {
  const {
    clientID,
    deliveryAddress,
    totalPrice,
    orderDetails,
    orderEtat,
    clientInformation,
  } = req.body;

  const newOrder = new Order({
    clientID,
    clientInformation,
    deliveryAddress,
    totalPrice,
    orderDetails,
    orderEtat,
  });

  try {
    const savedOrder = await newOrder.save();
    res.status(201).json(savedOrder);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
