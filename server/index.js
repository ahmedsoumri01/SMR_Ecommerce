const express = require("express");
require("dotenv").config();
const app = express();
require("./DB/connection");
const cors = require("cors");
const productRouter = require("./Routes/products");
app.use(cors());
app.use(express.json());
app.use(productRouter);
app.listen(5000, () => {
  console.log("server is running at port 5000");
});
