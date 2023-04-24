const postCommentQuery = require('../../database/queries/comments/postcommentquery');

const postCommentController = (req, res,next) => {
    const { post_id } = req.params;
    const user_id = req.user.id;
    const { content } = req.body;
    postCommentQuery({ post_id, user_id, content })
        .then((data) => res.status(200).json({
            massage: 'post done comment',
            data: data.rows[0],
        })).catch((err) => next(err))
}

module.exports = postCommentController;