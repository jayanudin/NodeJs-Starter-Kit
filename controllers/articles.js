const articleModel = require('./../models/articles');

const indexArticles = (req, res) => {
    articleModel.getAllArticles((err, articles) => {
        res.format({
            json: () => {
                res.json({
                    status: {
                        code: 0,
                        message: 'success',
                    },
                    data: articles
                });
            }
        });
    });
}

module.exports = { indexArticles };