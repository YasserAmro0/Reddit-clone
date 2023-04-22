const deletePostQuery = require("../../database/queries/posts/deletepostquery");

const deletePost = (req, res) => {
    const { id } = req.params;
    deletePostQuery(id)
        .then((data) => res.json({ message: "done", data: data }))
        .catch((err) => res.send(err));
}

module.exports = deletePost;