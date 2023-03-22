const express = require("express");
require("dotenv").config();
const app = express();
require("./DB/connection");
const cors = require("cors");
const productRouter = require("./Routes/products");
const userRouter = require("./Routes/users");
app.use(cors());
app.use(express.json());
app.use(productRouter);
app.use(userRouter);
app.listen(5000, () => {
  console.log("server is running at port 5000");
});
