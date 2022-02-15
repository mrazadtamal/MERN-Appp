const express = require("express");
const dotenv = require("dotenv").config();

const port = process.env.PORT || 5000;

const app = express();

app.get("/", (req, res) => {
  res.send("MERN");
});

app.listen(port, () => {
  console.log(`app server on at ${port}`);
});
