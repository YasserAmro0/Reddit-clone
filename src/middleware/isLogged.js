const { verifyToken } = require('../utils/jwt/generateToken');

const isLogged = (req, res, next) => {
    const { token } = req.cookies;
    if (token) {
        verifyToken(token)
            // .then((data) => console.log(data))
            .then((data) => res.send({
                message: "go home page",
                dataNow: data,
                statusCode: 200,
            }));


    } else {
        next();
    }


}

module.exports = isLogged;

