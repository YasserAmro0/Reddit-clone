const connection = require("../config/connection");

const getJoinPost = () => {

    const sql = {
        text: 'SELECT users.username , users.email , posts.content , posts.image_url FROM posts INNER JOIN users ON posts.user_id = users.id '
    }
    return connection.query(sql);
}
module.exports = getJoinPost;