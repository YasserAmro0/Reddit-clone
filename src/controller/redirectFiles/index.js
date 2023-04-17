const path = require('path');

const redirectToLogin = (req, res) => {
    res.status(200).sendFile(path.join(__dirname, "..", "..", "..", "public", "html", "login.html"));
}

const redirectToHome = (req, res) => {
    res.status(200).sendFile(path.join(__dirname, "..", "..", "..", "public", "html", "home.html"));
}

const redirectToProfile = (req, res) => {
    res.status(200).sendFile(path.join(__dirname, "..", "..", "..", "public", "html", "profile.html"));
}

module.exports = { redirectToLogin, redirectToHome, redirectToProfile };