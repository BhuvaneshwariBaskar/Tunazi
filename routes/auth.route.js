const express = require("express");
const { registerPost, loginPost } = require("../controllers/auth.controller");

const router = express.Router();

router.route("/register").post(registerPost);
router.route("/login").post(loginPost);

module.exports = router;
