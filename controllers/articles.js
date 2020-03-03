const db = require('./../connection/db');

const indexArticles = (_req, res, next) => {
    db.query('SELECT * FROM articles', (err, obj) => {
        if (err) {
            return next(err);
        }
        res.format({
            json: () => {
                res.json(obj);
            }
        })
    });
    
}

module.exports = { indexArticles };