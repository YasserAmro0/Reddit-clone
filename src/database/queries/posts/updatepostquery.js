const connection = require("../../config/connection");

const updatePostQuery = ({ content, image_url, id }) => {
    const sql = {
        text: 'UPDATE  posts SET content =$1 , image_url =$2 where id = $3',
        values: [content, image_url, id]
    }

    return connection.query(sql);
}

module.exports = updatePostQuery;