const connection = require("../../config/connection");


const deleteVoteQuery = (dataUser) => {
    const { post_id, user_id } = dataUser;
    const sql = {
        text: 'delete from votes where post_id =$1 AND user_id =$2',
        values: [post_id, user_id]
    }

    return connection.query(sql);
}

module.exports = deleteVoteQuery;