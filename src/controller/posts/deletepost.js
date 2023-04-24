const deletePostQuery = require("../../database/queries/posts/deletepostquery");

const deletePost = (req, res,next) => {
    const { id } = req.params;
    deletePostQuery(id)
        .then((data) => res.json({ message: "done", data: data }))
        .catch((err) => next(err));
}

module.exports = deletePost;