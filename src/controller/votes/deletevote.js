const deleteVoteQuery = require("../../database/queries/deletevotequery");

const deleteVoteController = (req, res) => {
    const { post_id } = req.params;
    const user_id = req.user.id;
    deleteVoteQuery({ post_id, user_id })
        .then(() => res.status(200).json({ msg: "done" }))
        .catch((err) => console.log(err));

}

module.exports = deleteVoteController;