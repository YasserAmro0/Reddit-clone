const postCommentQuery = require('../../database/queries/comments/postcommentquery');

const postCommentController = (req, res) => {
    const { post_id } = req.params;
    const user_id = req.user.id;
    const { content } = req.body;
    postCommentQuery({ post_id, user_id, content })
        .then((data) => res.status(200).json({
            massage: 'post done comment',
            data: data.rows[0],
        })).catch((err) => res.status(500).send("error server" + err))
}

module.exports = postCommentController;