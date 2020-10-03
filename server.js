const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const bookController = require("./controller/bookController");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
app.use(express.static("client/build"));

// Add routes, both API and view
app.get("/api/books", function(req, res) {
  bookController.findAll(req, res);
});

app.post("/api/books", function(req, res) {
  bookController.create(req, res);
});

app.delete("/api/books/:id", function(req, res) {
  bookController.remove(req, res);  
});

app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "/client/build/index.html"));
});

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/booksdb", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
