const connection = require("../../config/connection");

const updateCommentsQuery = ({ content, id }) => {
    const sql = {
        text: 'UPDATE  comments SET content =$1 where id=$2',
        values: [content, id]
    }

    return connection.query(sql);
}

module.exports = updateCommentsQuery;