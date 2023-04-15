const router = require('express').Router();
const postUserController = require('../controller/auth/signup');

router.post("/signup", postUserController);

module.exports = router;