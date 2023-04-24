const postQuery = require("../../database/queries/posts/postquery");
const postDataController = (req, res) => {
    const { content, image_url } = req.body;
    postQuery({ content, image_url }, req.user.id)
        .then((data) => res.status(200).json({
            massage: 'create account successfully',
            data: data.rows[0],
        })).catch((err) => res.status(500).send("error server" + err))


}

module.exports = postDataController;