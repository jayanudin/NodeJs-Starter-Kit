const express = require('express'),
    router = express.Router();

router.get('/', (req, res) => {
    res.send('Blog API with express js');
});
router.use('/articles', require('./articles'));

module.exports = router;