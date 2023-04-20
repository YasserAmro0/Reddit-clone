const connection = require('../config/connection');

const countVoteQuery = (post_id) => {

    const sql = {
        text: 'select count(post_id) from votes where post_id=$1',
        values: [post_id]
    }
    return connection.query(sql);

}

module.exports = countVoteQuery;