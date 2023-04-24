const countCommentsQuery = require("../../database/queries/comments/countcommentsquery");

const countCommentsController = (req, res,next) => {
    const { post_id } = req.params;
    countCommentsQuery(post_id)
        .then((data) => res.json(data.rows))
        .catch((err) => next(err));
}

module.exports = countCommentsController;