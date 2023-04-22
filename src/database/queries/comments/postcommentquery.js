const connection = require('../../config/connection');

const postCommentQuery = (dataUser) => {
    const { post_id, user_id, content } = dataUser;
    const sql = {
        text: 'insert into comments (post_id ,user_id , content)  values ( $1, $2, $3) returning * ',
        values: [post_id, user_id, content]
    }

    return connection.query(sql);
}
module.exports = postCommentQuery;