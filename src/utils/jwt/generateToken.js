const { verify, sign } = require('jsonwebtoken');

const generateToken = (payload) =>
    new Promise((res, rej) => {
        sign(payload, process.env.SECRET_KEY, (err, token) => {
            if (err) {
                rej(err);
            } else {
                res(token);
            }
        });
    });

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

module.exports = { generateToken, verifyToken };