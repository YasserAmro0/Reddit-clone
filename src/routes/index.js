const router = require('express').Router();

const { postUserController, signinController, logOutController } = require("../controller/auth")
const { clientError, serverError } = require("../controller/errors");
const { redirectToLogin, redirectToHome, redirectToProfile } = require("../controller/redirectFiles/index");
const authenticatedUser = require("../middleware/authenticatedUser");
const isLogged = require("../middleware/isLogged");
const postDataController = require("../controller/posts/postdata")
const getAllDataPost = require("../controller/posts/getalldata");
const getInfoUser = require("../controller/users/getInfouser");

router.use("/check", isLogged);
router.use("/allposts", getAllDataPost);

router.post("/signup", postUserController);
router.post("/signin", signinController);

router.use("/logout", logOutController);

router.use("/home", authenticatedUser, redirectToHome);
router.use('/login', redirectToLogin);



router.post('/post', authenticatedUser, postDataController);

router.use('/profile/:username', authenticatedUser, redirectToProfile);
router.get('/myprofile/:username', getInfoUser);


router.use(clientError);
router.use(serverError);
module.exports = router;