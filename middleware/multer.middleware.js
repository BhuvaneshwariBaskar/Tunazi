const multer = require("multer");
const fs = require("fs");

exports.imageUpload = multer({
    storage: multer.diskStorage({
        destination: function (req, file, cb) {
            path = `uploads/users/${req.body.userId}`
            fs.mkdirSync(path, { recursive: true })
            cb(null, path)
        },
        filename: function (req, file, cb) {
            cb(null, req.body.userId + file.originalname.slice(file.originalname.lastIndexOf('.'), file.originalname.length))
        },
    }), limits: { fieldSize: 2 * 1024 * 1024 }
})
