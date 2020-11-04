var db = require("../models");




module.exports = function(app) {

    app.get("/api/guests/", function(req, res) {
        db.Guest.findAll().then(function(result) {
            console.log(result);
        })
    })
    // res.json(result)
}
