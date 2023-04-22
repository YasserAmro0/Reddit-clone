const connection = require('../../config/connection');

const postUserQuery = (userData) => {
    const { username, password, email, birthday, gender } = userData;
    const options = {
        text: `insert into users (username, password, email, birthday, gender) values ($1, $2, $3, $4, $5) returning username, password, email, birthday, gender`,
        values: [username, password, email, birthday, gender],
    };
    return connection.query(options);
}

module.exports = postUserQuery;