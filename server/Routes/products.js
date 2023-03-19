const express = require("express");
const router = express.Router();
const Product = require("../models/ProductSchema");

// Fetch all products or products matching the search query
router.get("/products", async (req, res) => {
  const { productName, category } = req.query;
  console.log("Product", productName, category);
  let productData;
  if (category) {
    productData = await Product.find({
      category: category,
    }).select("-__v");
  } /* else if (productName && category) {
    productData = await Product.find({
      productName: new RegExp(productName, "i"),
      category: category,
    }).select("-__v");
  } */

  res.status(200).json({ data: productData });
});

// Fetch individual product
/* router.get("/products/:id", async (req, res) => {
  const { id } = req.params;
  const singleProductData = await Product.findById(id).select("-__v");
  singleProductData
    ? res.status(200).json({ data: singleProductData })
    : res.status(400).json({ error: "Oops, Something went wrong!!" });
}); */

// Add a new product
/* router.post("/products", async (req, res) => {
  const {
    productName,
    productPrice,
    productDescription,
    productImage,
    disponibilte,
    category,
  } = req.body;

  if (!productName || !productPrice || !productDescription || !category) {
    console.log(
      "Product",
      productName,
      productPrice,
      productDescription,
      category
    );
    res.status(400).json({ message: "Please fill all the fields" });
  } else {
    try {
      const isAlreadyExists = await Product.findOne({
        productName: productName,
      });
      if (isAlreadyExists) {
        res.status(403).json({ message: "Product already exists" });
      } else {
        const newProduct = new Product({
          productName,
          productPrice,
          productDescription,
          productImage,
          disponibilte,
          category,
        });
        await newProduct.save();
        res
          .status(201)
          .json({ data: newProduct, message: "Product created successfully" });
      }
    } catch (error) {
      res.status(400).json({ message: "Oops, Something went wrong!" });
      console.error(error);
    }
  }
}); */

// Update individual product
/* router.patch("/products/:id", async (req, res) => {
  const { id } = req.params;
  const updatedProductData = await Product.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  updatedProductData
    ? res.status(200).json({
        data: updatedProductData,
        message: "Product updated successfully",
      })
    : res.status(400).json({ error: "Oops, Something went wrong!!" });
}); */

// Delete individual product
/* router.delete("/products/:id", async (req, res) => {
  const { id } = req.params;
  const deletedProductData = await Product.findByIdAndDelete(id);
  deletedProductData
    ? res.status(200).json({
        data: deletedProductData,
        message: "Product deleted successfully",
      })
    : res.status(400).json({ error: "Oops, Something went wrong!!" });
});
 */
module.exports = router;
