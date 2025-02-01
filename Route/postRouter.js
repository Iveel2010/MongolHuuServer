const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("🔥 Постын API!");
});

module.exports = router;
