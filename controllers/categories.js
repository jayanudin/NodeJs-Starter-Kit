const db = require('./../connection/db');

const indexCategories = (_req, res, next) => {
    db.query('SELECT * FROM categories', (err, categories) => {
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
                    data: categories
                });
            }
        })
    });

}

module.exports = { indexCategories };