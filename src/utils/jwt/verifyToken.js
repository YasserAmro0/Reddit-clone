const { verify } = require('jsonwebtoken');

const verifyToken = (token) => {
    return new Promise((res, rej) => {
        verify(token, process.env.SECRET_KEY, (err, decoded) => {
            if (err) {
                rej(err);
            } else {
                res(decoded)
            }
        })
    })
}
module.exports = { verifyToken };