const countVoteQuery = require("../../database/queries/votes/countvotequery");

const countVoteController = (req, res) => {
    const { post_id } = req.params;
    countVoteQuery(post_id)
        .then((data) => res.json(data.rows))
        .catch((err) => console.log(err));
}

module.exports = countVoteController;