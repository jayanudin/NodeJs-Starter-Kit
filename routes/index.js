const express = require('express'),
    router = express.Router();

router.get('/', (req, res) => {
    res.send('Blog API with express js');
});
router.use('/api/articles', require('./articles'));
router.use('/api/comments', require('./comments'));
router.use('/api/categories', require('./categories'));

module.exports = router;