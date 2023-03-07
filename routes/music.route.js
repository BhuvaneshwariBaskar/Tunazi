const cloudinary = require("cloudinary");
const express = require('express');
const { validateUser } = require('../middleware/middleware')
const {fetchMusic} = require("../controllers/music.controller")
// const {fetchMusicName} = require("../controllers/music.controller")

const router = express.Router();


router.route('/music').get( fetchMusic)
// router.route('/musicname').get( fetchMusicName)




cloudinary.config({
  cloud_name: "deak6nhde",
  api_key: "119724621868458",
  api_secret: "skaJ6vB_l-p4L7YK0TYwzPm7dt8",
});


module.exports = router;