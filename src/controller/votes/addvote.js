const addVoteQuery = require('../../database/queries/votes/addvotequery');
const userVoteQuery = require("../../database/queries/votes/uservotequery");


const addVoteController = (req, res,next) => {
    const { post_id } = req.params;
    let user_id = req.user.id;
    userVoteQuery({ post_id, user_id })
        .then((data) => {
            if (data.rowCount === 0) {
                addVoteQuery({ post_id, user_id })
                    .then(() => res.status(200).json({ status: 201, message: 'done' }))
            } else {
                res.status(201).json({ status: 201, message: 'You voted before' });

            }
        })
        .catch(err => next(err));
}

module.exports = addVoteController;

