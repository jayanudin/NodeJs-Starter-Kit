const db = require('./../connection/db');

const indexArticles = (_req, res, next) => {
    db.query('SELECT * FROM articles', (err, articles) => {
        if (err) {
            return next(err);
        }
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
        })
    });
    
}

module.exports = { indexArticles };