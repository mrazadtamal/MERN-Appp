const express = require("express");
const router = express.Router();
const { getGoal } = require("../controllers/goalController.js");

router.get("/", getGoal);

router.post("/", (req, res) => {
  res.status(200).json({ name: "azad" });
});
router.put("/:id", (req, res) => {
  res.status(200).json({ name: `update goals ${req.params.id}` });
});
router.delete("/:id", (req, res) => {
  res.status(200).json({ name: `delete goals ${req.params.id}` });
});

module.exports = router;
