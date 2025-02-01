const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("🔥 Like API!");
});

module.exports = router;
