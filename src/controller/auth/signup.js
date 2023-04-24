const bcrypt = require('bcrypt');
const postUserQuery = require('../../database/queries/auth/signupquery');
const signupSchema = require("../../utils/validation/signupSchema");
const CustomError = require("../../utils/error/index");

const postUserController = (req, res, next) => {
    const { username, password, email, birthday, gender } = req.body;
    signupSchema.validateAsync({ username, password, email, birthday, gender }, { abortEarly: false, })
        .then(() => bcrypt.hash(password, 10))
        .then((data) => postUserQuery({ username, password: data, email, birthday, gender }))
        .then(data => {
            res.status(200).json({
                massage: 'create account successfully',
                data: data.rows[0],
            })
        })
        .catch((error) => {
            if (error.name === "ValidationError") {
                const message = error.details.map((i) => i.message)
                next(new CustomError(400, message));
            } else {
                res.send(error);
            }
        }
        )
}

module.exports = postUserController;