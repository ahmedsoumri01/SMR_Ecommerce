const mongoose = require("mongoose");
require("dotenv").config();
const dbURL = process.env.DB_URL;
mongoose
  .connect(dbURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connection start"))
  .catch((error) => {
    console.error(error.message);
  });
