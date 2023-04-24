const updatePostQuery = require("../../database/queries/posts/updatepostquery");

const updatePost = (req, res,next) => {
    const { content, image_url } = req.body;
    const { id } = req.params;
    updatePostQuery({ content, image_url, id })
        .then((data) => res.json(data.rows))
        .catch((err) => next(err))
}

module.exports = updatePost;