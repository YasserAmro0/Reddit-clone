const deleteCommentsQuery = require("../../database/queries/comments/deletecommentsquery");

const deleteComment = (req, res, next) => {
    const { id } = req.params;
    deleteCommentsQuery(id)
        .then((data) => res.json({ msg: "done", data: data }))
        .catch((err) => next(err));
}
module.exports = deleteComment;