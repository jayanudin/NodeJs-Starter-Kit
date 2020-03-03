const express = require('express'),
    router = express.Router(),
    indexController = require('../controllers');
    
router.route('/').get(indexController.dashboard);
router.use('/articles', require('./articles'));

module.exports = router;