const router = require('express').Router();
const postUserController = require('../controller/auth/signup');
const signinController = require("../controller/auth/signin");
const { clientError, serverError } = require("../controller/errors");
router.post("/signup", postUserController);

router.post("/signin", signinController);
router.use(clientError);
router.use(serverError);
module.exports = router;