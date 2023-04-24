const getJoinPost = require("../../database/queries/posts/getjoinpost");

const getAllDataPost = (req, res) => {
    getJoinPost()
        .then((data) => {
            res.json(data.rows)
        })
        .catch((error) => res.send(error));
}

module.exports = getAllDataPost;