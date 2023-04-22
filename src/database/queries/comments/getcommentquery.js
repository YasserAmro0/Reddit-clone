const connection = require("../../config/connection");

const getCommentQuery = (post_id) => {
    const sql = {
        text: 'SELECT users.username ,comments.id,comments.post_id,comments.content,comments.created_at FROM comments INNER JOIN users ON comments.user_id = users.id where post_id=$1',
        values: [post_id]
    }
    return connection.query(sql);
}

module.exports = getCommentQuery;