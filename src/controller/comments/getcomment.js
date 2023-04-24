const getCommentQuery = require('../../database/queries/comments/getcommentquery');

const getCommentController = (req, res, next) => {
    const { post_id } = req.params;
    getCommentQuery(post_id)
        .then((data) => {
            res.status(200).json({
                massage: 'done data',
                data: data.rows,
                username: req.user.username
            })
        })
        .catch((error) => next(error));
}

module.exports = getCommentController;