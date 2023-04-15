require('dotenv').config();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const signInQuery = require('../../database/queries/signinquery');
const signInSchema = require("../../utils/validation/signinSchema");
const CustomError = require("../../utils/error/index");

const signinController = (req, res, next) => {
    const { email, password } = req.body;
    let id;
    let username;
    signInSchema.validateAsync({ email, password }, { abortEarly: false, })
        .then(() => signInQuery(email))
        .then((data) => {
            if (data.rowCount === 0) {
                throw new CustomError(400, 'this email is not exists');

            } else {
                id = data.rows[0].id
                username = data.rows[0].username;
                return bcrypt.compare(password, data.rows[0].password);
            }
        })
        .then((isMatch) => {
            if (isMatch) {
                return jwt.sign({ username, idUser: id }, process.env.SECRET_KEY);
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