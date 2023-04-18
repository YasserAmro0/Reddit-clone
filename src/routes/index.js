const router = require('express').Router();

const { postUserController, signinController, logOutController } = require("../controller/auth")
const { clientError, serverError } = require("../controller/errors");
const { redirectToLogin, redirectToHome, redirectToProfile } = require("../controller/redirectFiles/index");
const authenticatedUser = require("../middleware/authenticatedUser");
const isLogged = require("../middleware/isLogged");
const postDataController = require("../controller/posts/postdata")
const getAllDataPost = require("../controller/posts/getalldata");

router.use("/check", isLogged);
router.use("/allposts", getAllDataPost);

router.post("/signup", postUserController);
router.post("/signin", signinController);

router.use("/logout", logOutController);

router.use("/home", authenticatedUser, redirectToHome);
router.use('/login', redirectToLogin);
router.use('/profile', authenticatedUser, redirectToProfile);

router.post('/post', authenticatedUser, postDataController);

router.use(clientError);
router.use(serverError);
module.exports = router;