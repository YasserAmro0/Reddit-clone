const countCommentsController = require('./countcomments');
const getCommentController = require('./getcomment');
const postCommentController = require("./postcomment");
const deleteComment = require("./deletecomment");

module.exports = { countCommentsController, getCommentController, postCommentController, deleteComment };
