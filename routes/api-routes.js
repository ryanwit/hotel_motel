var db = require("../models"); // Require in models folder

module.exports = function (app) {
  app.get("/api/guests", function (res, res){
    res.json(res)
  })
  
  app.get("/guest/api/guests", function (req, res) {
    db.Guest.findAll({}).then(function (result) {
      console.log(result);
      res.json(result);
    });
  });

  app.post("/guest/api/guests", function (req, res) {
    db.Guest.create({
      name: req.body.name,
      rooms: req.body.rooms,
      phone: req.body.phone,
      amount: req.body.amount,
      checkin: req.body.checkin,
      checkout: req.body.checkout
    }).then(function (result) {
      res.json(result);
      console.log(result);
    });
  });

  app.put("/guest/api/guests/:id", function(req,res){
    db.Guest.update(
      req.body,
      {
      where: {
        id: req.params.id
      },
      
    }).then(function(result){
      res.json(result)
      console.log(result)
    })
  })

  app.delete("/guest/api/guests/:id", function (req, res){
    db.Guest.destroy({
        where: {
          id: req.params.id
        }
    }).then(function(result){
      res.json(result)
    })
  })
  

}

