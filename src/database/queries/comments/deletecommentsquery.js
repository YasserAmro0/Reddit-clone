const connection = require("../../config/connection");

const deleteCommentsQuery = (id) => {

    const sql = {
        text: "delete from comments where id =$1",
        values: [id]

    }
    return connection.query(sql);
}

module.exports = deleteCommentsQuery;