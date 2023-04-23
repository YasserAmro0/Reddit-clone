const countCommentsController = require('./countcomments');
const getCommentController = require('./getcomment');
const postCommentController = require("./postcomment");
const deleteComment = require("./deletecomment");
const updateComments = require("./updatecomments");

module.exports = { countCommentsController, getCommentController, postCommentController, deleteComment, updateComments };
