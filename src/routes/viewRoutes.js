const view = require('express').Router();

const { redirectToLogin, redirectToSingUp, redirectToHome, redirectToProfile, redirectToComment } = require("../controller/redirectFiles/index");

const authenticatedUser = require("../middleware/authenticatedUser");

view.use('/profile/:username', authenticatedUser, redirectToProfile);
view.use('/login', redirectToLogin);
view.use("/signuppage", redirectToSingUp);
view.use("/home", authenticatedUser, redirectToHome);
view.use("/comments/:post_id", authenticatedUser, redirectToComment);

module.exports = view;