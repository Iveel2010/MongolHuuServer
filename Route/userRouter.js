const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("🔥 Хэрэглэгчийн API!");
});

module.exports = router;
