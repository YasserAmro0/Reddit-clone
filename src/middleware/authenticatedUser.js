const { verifyToken } = require('../utils/jwt/verifyToken');

const authenticatedUser = (req, res, next) => {
    const { token } = req.cookies;
    if (token) {
        verifyToken(token)
            .then((user) => {
                req.user = user;
                next();
            })
            .catch((err) => {
                if (err.name === "JsonWebTokenError") {
                    res.send({
                        message: "Invalid or expired token",
                        statusCode: 401,
                    });
                }
                res.send({
                    message:
                        err.message || "you are not authorized to access this resource",
                    statusCode: err.status || 401,
                })
            })


    } else {
        res.status(401).json({ message: "unauthenticated" });
    }
}

module.exports = authenticatedUser;