const postQuery = require("../../database/queries/postquery");
const { verifyToken } = require("../../utils/jwt/verifyToken");
const postDataController = (req, res) => {
    const { content, image_url } = req.body;
    const { token } = req.cookies;
    // console.log(token);
    verifyToken(token).then((data) => data.id)
        .then((data) => { return data })
        .then((data) => postQuery({ content, image_url }, data))
        .then((data) => res.status(200).json({
            massage: 'create account successfully',
            data: data.rows[0],
        })).catch((err) => res.status(500).send("error server" + err))


}

module.exports = postDataController;