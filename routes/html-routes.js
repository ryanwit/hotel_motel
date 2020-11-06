// Routes

const db = require("../models");

// =============================================================
module.exports = function(app) {


  
  app.get("/", function(req, res) {
    db.Guest.findAll({raw:true}).then(function(res2){
      const dataset = { Guest: res2 }
      res.render("index", dataset )
    })
  });




}
