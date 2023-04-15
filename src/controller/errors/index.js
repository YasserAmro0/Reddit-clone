const path = require('path');
const clientError = (req, res) => {
    res.status(404).sendFile(path.join(__dirname, "..", "..", "..", "public", "html", "error404.html"));
}

const serverError = (err, req, res, next) => {
    if (err.status) {
        res.status(err.status).json({ status: err.status, message: err.message });
    } else {
        console.log('server error');
        res.status(500).sendFile(path.join(__dirname, "..", "..", "..", "public", "html", "error500.html"));
    }
}

module.exports = { clientError, serverError }