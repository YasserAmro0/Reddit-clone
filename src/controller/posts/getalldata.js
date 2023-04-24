const getJoinPost = require("../../database/queries/posts/getjoinpost");

const getAllDataPost = (req, res,next) => {
    getJoinPost()
        .then((data) => {
            res.json(data.rows)
        })
        .catch((error) => next(error));
}

module.exports = getAllDataPost;