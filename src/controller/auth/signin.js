require('dotenv').config();
const bcrypt = require('bcrypt');
const signInQuery = require('../../database/queries/auth/signinquery');
const signInSchema = require("../../utils/validation/signinSchema");
const CustomError = require("../../utils/error/index");
const { generateToken } = require("../../utils/jwt/generateToken");

const signinController = (req, res, next) => {
    const { email, password } = req.body;
    signInSchema.validateAsync({ email, password }, { abortEarly: false, })
        .then(() => signInQuery(email))
        .then((data) => {
            if (data.rowCount === 0) {
                throw new CustomError(400, 'this email is not exists');

            } else {
                req.user = data.rows[0];
                return bcrypt.compare(password, data.rows[0].password);
            }
        })
        .then((isMatch) => {
            if (isMatch) {
                return generateToken({ id: req.user.id, username: req.user.username }, process.env.SECRET_KEY);

            } else {
                throw new CustomError(400, 'Invalid password');
            }
        })
        .then((token) => {
            res.cookie("token", token, { httpOnly: true, secure: true }).json({
                status: 200,
                message: 'Sign In successfully '
            })
        })
        .catch((error) => {
            if (error.name === 'ValidationError') {
                const message = error.details.map((i) => i.message)
                next(new CustomError(400, message))
            } else {
                next(error)
            }
        })

}

module.exports = signinController;