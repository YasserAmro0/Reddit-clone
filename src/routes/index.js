const router = require('express').Router();

const { postUserController, signinController, logOutController } =require("../controller/auth")
const { clientError, serverError } = require("../controller/errors");
const { redirectToLogin, redirectToHome, redirectToProfile } = require("../controller/redirectFiles/index");
const authenticatedUser = require("../middleware/authenticatedUser");
const isLogged = require("../middleware/isLogged");


router.use("/check", authenticatedUser, isLogged);

router.post("/signup", postUserController);
router.post("/signin", signinController);
router.use("/logout", authenticatedUser, logOutController);

router.use("/home", authenticatedUser, redirectToHome);
router.use('/login', redirectToLogin);
router.use('/profile', authenticatedUser, redirectToProfile);


router.use(clientError);
router.use(serverError);
module.exports = router;