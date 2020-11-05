// Routes

const db = require("../models");

// =============================================================
module.exports = function(app) {
  
  app.get("/", function(req, res){
    res.render("index")
  })
 

  app.get("/guests", function(req, res) {
    db.Guest.findAll({raw:true}).then(function(res){
      console.log(res)
      res.render("index", {name: res.name, rooms:res.room} )

    })
  });

}
