const path = require('path');

const redirectToLogin = (req, res) => {
    res.status(200).sendFile(path.join(__dirname, "..", "..", "..", "public", "html", "login.html"));
}
const redirectToSingUp = (req, res) => {
    res.status(200).sendFile(path.join(__dirname, "..", "..", "..", "public", "html", "signup.html"));
}

const redirectToHome = (req, res) => {
    res.status(200).sendFile(path.join(__dirname, "..", "..", "..", "public", "html", "home.html"));
}

const redirectToProfile = (req, res) => {
    res.status(200).sendFile(path.join(__dirname, "..", "..", "..", "public", "html", "profile.html"));
}

const redirectToComment = (req, res) => {
    res.status(200).sendFile(path.join(__dirname, "..", "..", "..", "public", "html", "comments.html"));
}

module.exports = { redirectToLogin, redirectToSingUp, redirectToHome, redirectToProfile, redirectToComment };