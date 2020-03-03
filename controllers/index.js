const dashboard = (_req, res, next) => {
    res.format({
        json: () => {
            res.json("Blog API with Node js");
        }
    })
    
}

module.exports = { dashboard };