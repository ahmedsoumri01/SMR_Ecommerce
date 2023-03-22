const express = require("express");
require("dotenv").config();
require("./DB/connection");
const cors = require("cors");
const port = process.env.SERVER_PORT;
const app = express();
const productRouter = require("./Routes/products");
const userRouter = require("./Routes/users");
app.use(cors());
app.use(express.json());
app.use(productRouter);
app.use(userRouter);
app.listen(port, () => {
  console.log("server is running at port " + port);
});
