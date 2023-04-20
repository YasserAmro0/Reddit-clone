const connection = require("../config/connection");

const getInfoUserQuery = (username) => {
    const sql = {
        text: `SELECT users.username , users.email,users.gender,users.birthday,posts.id , posts.content , posts.image_url FROM posts INNER JOIN users ON posts.user_id = users.id where username='${username}'`,
    }
    return connection.query(sql);
}

module.exports = getInfoUserQuery;