const express = require("express");
const router = express.Router();

//@route   GET /api/profile/test
//@desc    Tests profile route
//@access  Public
router.get("/test", (req, res) => res.json({ msg: "hey profiles" }));

module.exports = router;