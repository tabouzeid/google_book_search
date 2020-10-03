const bookController = require("../controller/bookController");

module.exports = function(app) {
    app.get("/api/books", function(req, res) {
      bookController.findAll(res, req);
    });

    app.post("/api/books", function(req, res) {
      bookController.create(req, res);
    });

    app.delete("/api/books/:id", function(req, res) {
      bookController.delete(req, res);  
    });
};