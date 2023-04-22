const connection = require('../../config/connection');

const userVoteQuery = (userData) => {
    const { post_id, user_id } = userData;

    const sql = {
        text: 'select * from votes where post_id=$1 and user_id=$2 ',
        values: [post_id, user_id]
    }
    return connection.query(sql);

}

module.exports = userVoteQuery;