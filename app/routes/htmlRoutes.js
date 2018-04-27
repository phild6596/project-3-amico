const Express = require('express');
const Path = require('path');
const Router = Express.Router();
//const TopicController = require(../controllers)

Router.get('/', (req, res) => {
    res.sendFile(Path.join(__dirname, /*fill in code*/))
});

Router.get("/login", function(req, res) {
  res.sendFile(Path.join(__dirname, /*fill in code*/));
});

Router.get("/home", function(req, res) {
  res.sendFile(Path.join(__dirname, /*fill in code*/));
});

Router.get("/profile", function(req, res) {
  res.sendFile(Path.join(__dirname, /*fill in code*/));
});

Router.get("/tutoring", function(req, res) {
  res.sendFile(Path.join(__dirname, /*fill in code*/));
});

module.exports = Router;