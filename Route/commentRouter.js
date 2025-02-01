const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("🔥 Сэтгэгдлийн API!");
});

module.exports = router;
