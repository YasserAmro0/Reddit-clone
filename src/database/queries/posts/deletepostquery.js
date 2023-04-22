const connection = require("../../config/connection");

const deletePostQuery = (id) => {
    const sql = {
        text: 'DELETE FROM posts WHERE id= $1',
        values: [id]
    }
    return connection.query(sql);
}

module.exports = deletePostQuery;