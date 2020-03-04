const express = require('express'),
    router = express.Router(),
    commentsController = require('./../controllers/comments');

router.route('/')
    .get(commentsController.indexComments);

module.exports = router;