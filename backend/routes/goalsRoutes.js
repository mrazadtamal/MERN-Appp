const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("MERN");
});
router.post("/", (req, res) => {
  res.status(200).json({ name: "azad" });
});
router.get("/", (req, res) => {
  res.send("MERN");
});
router.get("/", (req, res) => {
  res.send("MERN");
});

module.exports = router;
