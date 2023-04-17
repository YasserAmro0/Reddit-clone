const { sign } = require('jsonwebtoken');

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



module.exports = { generateToken };