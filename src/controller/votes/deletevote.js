const deleteVoteQuery = require("../../database/queries/votes/deletevotequery");

const deleteVoteController = (req, res, next) => {
    const { post_id } = req.params;
    const user_id = req.user.id;
    deleteVoteQuery({ post_id, user_id })
        .then(() => res.status(200).json({ msg: "done" }))
        .catch((err) => next(err));

}

module.exports = deleteVoteController;