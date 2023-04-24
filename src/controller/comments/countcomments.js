const countCommentsQuery = require("../../database/queries/comments/countcommentsquery");

const countCommentsController = (req, res) => {
    const { post_id } = req.params;
    countCommentsQuery(post_id)
        .then((data) => res.json(data.rows))
        .catch((err) => console.log(err));
}

module.exports = countCommentsController;