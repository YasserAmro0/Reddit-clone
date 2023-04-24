const postQuery = require("../../database/queries/posts/postquery");
const postDataController = (req, res,next) => {
    const { content, image_url } = req.body;
    postQuery({ content, image_url }, req.user.id)
        .then((data) => res.status(200).json({
            massage: 'create account successfully',
            data: data.rows[0],
        })).catch((err) => next(err))


}

module.exports = postDataController;