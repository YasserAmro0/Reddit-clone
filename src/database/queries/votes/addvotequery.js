const connection = require("../../config/connection");

const addVoteQuery = (dataUser) => {
    const { post_id, user_id } = dataUser;
    const sql = {
        text: 'insert into votes  (post_id,user_id) values ($1,$2)',
        values: [post_id, user_id]

    }
    return connection.query(sql);
}

module.exports = addVoteQuery;