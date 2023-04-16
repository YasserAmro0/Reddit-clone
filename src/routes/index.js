const router = require('express').Router();
const postUserController = require('../controller/auth/signup');
const signinController = require("../controller/auth/signin");
const logOutController = require("../controller/auth/logout");
const { clientError, serverError } = require("../controller/errors");
const { redirectToLogin, redirectToHome, redirectToProfile } = require("../middleware/index");



router.post("/signup", postUserController);
router.post("/signin", signinController);
router.use("/logout", logOutController);

router.use("/home", redirectToHome);
router.use('/login', redirectToLogin);
router.use('/profile', redirectToProfile);


router.use(clientError);
router.use(serverError);
module.exports = router;