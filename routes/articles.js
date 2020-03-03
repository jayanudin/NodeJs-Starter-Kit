const express = require('express'),
    router = express.Router(),
    articleController = require('./../controllers/articles');

router.route('/')
    .get(articleController.indexArticles);

module.exports = router;