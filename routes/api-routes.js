
var db = require("../models"); // Require in models folder 

module.exports = function(app) {

    app.get("/api/guests", function(req, res) {
        db.Guest.findAll({}).then(function(result) {
            console.log(result);
            res.json(result)
        });
    });

    app.post("/api/guests", function(req, res) {
        db.Guest.create({
            name: req.body.name,
            rooms: req.body.rooms,
            phone: req.body.phone,
            status: req.body.status
        })
        .then(function(result) {
            res.json(result)
              console.log(result)
        });
    });   

    app.put("/api/guests/:id", function(req, res) {
        var condition = "id = " + req.params.id;
      
        console.log("condition", condition);
      
        guest.update({
          status: req.body.status
        }, condition, function(result) {
          if (result.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
          } else {
            res.status(200).end();
          }
        });
      });

   
};
