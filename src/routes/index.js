const router = require('express').Router();
const viewPage = require("./viewRoutes");
const { postUserController, signinController, logOutController } = require("../controller/auth")
const { clientError, serverError } = require("../controller/errors");
const authenticatedUser = require("../middleware/authenticatedUser");
const isLogged = require("../middleware/isLogged");
const getInfoUser = require("../controller/users/getInfouser");
const { getAllDataPost, postDataController, deletePost } = require("../controller/posts");
const { addVoteController, countVoteController, deleteVoteController } = require("../controller/votes");
const { countCommentsController, getCommentController, postCommentController, deleteComment } = require("../controller/comments");

router.use("/check", isLogged);

router.post("/signup", postUserController);
router.post("/signin", signinController);
router.use("/logout", logOutController);



router.use("/allposts", getAllDataPost);
router.post('/post', authenticatedUser, postDataController);
router.delete("/post/delete/:id", deletePost);


router.post("/comment/:post_id", authenticatedUser, postCommentController);
router.use("/getcomment/:post_id", authenticatedUser, getCommentController);
router.use("/countcomment/:post_id", countCommentsController);
router.delete("/comment/:id", deleteComment);


router.get('/myprofile/:username', getInfoUser);

router.get('/votes/up/:post_id', authenticatedUser, addVoteController);
router.get('/votes/down/:post_id', authenticatedUser, deleteVoteController);
router.get('/count/:post_id', countVoteController);


router.use(clientError);
router.use(serverError);

module.exports = { router, viewPage };