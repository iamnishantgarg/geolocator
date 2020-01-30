const path = require("path");
const express = require("express");
const cors = require("cors");
// const dotenv = require("dotenv");
// dotenv.config({ path: "./config/config.env" });
const app = express();
const keys = require("./keys");
const PORT = keys.PORT || 5000;

// body-pareser
app.use(express.json());

// cors
app.use(cors());

app.get("/api/v1/stores", (req, res, next) => {
  res.send("hello");
});

app.listen(PORT, () => {
  //   if (err) console.log(err);
  console.log(`server is running on ${PORT}`);
});
