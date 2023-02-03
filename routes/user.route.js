const cloudinary = require("cloudinary");
const express = require('express');
const {profilePicPost} = require('../controllers/user.controller');
const {validateUser}=require('../middleware/middleware')
const {imageUpload}=require('../middleware/multer.middleware')
const router = express.Router();
const db = require("../database");

router.route('/addProfile').post(validateUser, imageUpload.single('image'), profilePicPost)


cloudinary.config({
  cloud_name: "deak6nhde",
  api_key: "119724621868458",
  api_secret: "skaJ6vB_l-p4L7YK0TYwzPm7dt8",
});

router.route('/musicdata').get(async(req,res)=>{
    console.log("ok");
    await db.query("SELECT * FROM happyhits", (err, response) => {
        if (err) {
          console.log(err);
        } else {
          res.status(200).json(response);
        }
      });
})

module.exports = router;