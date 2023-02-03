const path = require("path");
exports.profilePicPost = async (req, res) => {
  try {
    console.log(req.body);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error });
  }
};
