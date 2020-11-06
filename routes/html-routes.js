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

  app.get("/guests/:id", function(req, res){
    db.Guest.findOne({
      where:
      {
        id:req.params.id
      },
    }).then(function(response){
      console.log(response)
      res.render("index")
    })
  })



}
