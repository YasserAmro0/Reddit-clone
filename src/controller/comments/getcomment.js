const getCommentQuery = require('../../database/queries/comments/getcommentquery');

const getCommentController = (req, res) => {
    const { post_id } = req.params;
    getCommentQuery(post_id)
        .then((data) => {
            res.status(200).json({
                massage: 'done data',
                data: data.rows,
                username: req.user.username
            })
        })
        .catch((error) => res.send(error));
}

module.exports = getCommentController;