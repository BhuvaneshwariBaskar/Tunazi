const path = require("path")
const db = require("../database");


exports.profilePicPost = async (req, res) => {
  try {
    const p = process.env.SERVER_URL + '/users/' + req.body.userId + '/' + req.body.userId + req.file.originalname.slice(req.file.originalname.lastIndexOf('.'), req.file.originalname.length)
    console.log("🚀 ~ file: user.controller.js:8 ~ exports.profilePicPost= ~ p", p)
    db.query('UPDATE user_table SET profilepic = ? WHERE user_id = ?', [p, req.body.userId], (err, response) => {
      if (err) {
        console.log(err);
        return res.json(err)
      }
      db.query('SELECT * FROM user_table WHERE user_id = ?', [req.body.userId], (err, response1) => {
        if (err) {
          console.log(err);
          return res.json(err)
        }

        res.json({ ...response1[0], token: req.headers['authorization'].split(' ')[1] })
      })
    })
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error });
  }
};
