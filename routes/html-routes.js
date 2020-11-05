// Routes
// =============================================================
module.exports = function(app) {

  app.get("/", function(req, res) {
    res.render("index")
  });

  // app.get("/api/guests", function(req, res) {
  //   res.render("index")
  // });


};