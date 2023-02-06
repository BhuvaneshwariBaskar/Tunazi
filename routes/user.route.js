const cloudinary = require("cloudinary");
const express = require("express");
const { profilePicPost } = require("../controllers/user.controller");
const { historyPost,historyGet } = require("../controllers/user.controller");
const { validateUser } = require("../middleware/middleware");
const { imageUpload } = require("../middleware/multer.middleware");

const router = express.Router();
const db = require("../database");

router
  .route("/addProfile")
  .post(validateUser, imageUpload.single("image"), profilePicPost);
router.route("/history/:user_id").post(validateUser, historyPost).get(historyGet)

cloudinary.config({
  cloud_name: "deak6nhde",
  api_key: "119724621868458",
  api_secret: "skaJ6vB_l-p4L7YK0TYwzPm7dt8",
});

module.exports = router;
