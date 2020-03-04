const express = require('express'),
    router = express.Router(),
    categoriesController = require('./../controllers/categories');

router.route('/')
    .get(categoriesController.indexCategories);

module.exports = router;