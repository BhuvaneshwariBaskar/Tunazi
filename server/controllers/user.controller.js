const path=require("path")
exports.profilePicPost = async (req, res) => {
  try {
    console.log(req.body);
    // const { title, description, userId } = req.body;

    // const id_paper = uniqid()

    // await Paper.create({
    //     id_paper,
    //     title,
    //     description,
    //     link: req.file.path,
    //     id_user: userId,
    // }).then(() => {
    //     res.json('ok')
    // })
    const profilePath = path.join(__dirname, "../profile/"+req.body.userId+"/"+req.file.originalname);
    res.json(profilePath);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error });
  }
};
