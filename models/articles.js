const db = require('./../connection/db');

const getAllArticles = (result) => {
    db.query('SELECT * FROM articles', (err, articles) => {
        if (err) {
            return next(err);
        }
        else {
            result(null, articles);
        }
    });
}

module.exports = { getAllArticles };