const updateCommentsQuery = require('../../database/queries/comments/updatecommentsquery');


const updateComments = (req, res) => {
    const { content } = req.body;
    const { id } = req.params;
    updateCommentsQuery({ content, id })
        .then((data) => res.json(data.rows))
        .catch((err) => console.log(err));

}

module.exports = updateComments;