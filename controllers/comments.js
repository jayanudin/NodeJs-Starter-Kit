const db = require('./../connection/db');

const indexComments = (_req, res, next) => {
    db.query('SELECT * FROM comments', (err, comments) => {
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
                    data: comments
                });
            }
        })
    });
    
}

module.exports = { indexComments };