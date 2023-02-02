
const express = require('express');
const { profilePicPost } = require('../controllers/user.controller');
const { validateUser } = require('../middleware/middleware')
const { imageUpload } = require('../middleware/multer.middleware')

const router = express.Router();

// router.route('/profile/:id_user/:filename').get(profilePic)
router.route('/addProfile').post(validateUser, imageUpload.single('image'), profilePicPost)


module.exports = router;