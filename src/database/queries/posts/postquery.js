const connection = require("../../config/connection");

const postQuery = ({ content, image_url }, user_id) => {
    const option = {
        text: 'insert into posts (content,image_url, user_id) values ( $1, $2, $3) returning *',
        values: [content, image_url, user_id],
    }
    return connection.query(option);

}
module.exports = postQuery;