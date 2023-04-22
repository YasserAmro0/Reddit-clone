const connection = require("../../config/connection");

const countCommentsQuery = (post_id) => {
    const sql = {
        text: 'select count(post_id) from comments where post_id=$1',
        values: [post_id]

    }
    return connection.query(sql);
}

module.exports = countCommentsQuery;