const getInfoUserQuery = require('../../database/queries/getinfouserquery');

const getInfoUser = (req, res) => {
    const { username } = req.params;
    getInfoUserQuery(username)
        .then((data) => {
            res.status(200).json({
                massage: 'done data',
                data: data.rows,
            })
        })
        .catch((error) => res.send(error));
}
module.exports = getInfoUser;