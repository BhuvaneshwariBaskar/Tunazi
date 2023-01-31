const multer = require('multer')
const fs = require('fs')

exports.imageUpload = multer({
    storage: multer.diskStorage({
        destination: function (req, file, cb) {
            console.log(req.body);
            path = `profile/${req.body.userId}`
            fs.mkdirSync(path, { recursive: true })
            cb(null, path)
        },
        filename: function (req, file, cb) {
            cb(null, file.originalname)
        },
    }), limits: { fieldSize: 2 * 1024 * 1024 }
})