const getInfoUserQuery = require('../../database/queries/users/getinfouserquery');

const getInfoUser = (req, res, next) => {
    const { username } = req.params;
    getInfoUserQuery(username)
        .then((data) => {
            res.status(200).json({
                massage: 'done data',
                data: data.rows,
            })
        })
        .catch((error) => next(error));
}
module.exports = getInfoUser;