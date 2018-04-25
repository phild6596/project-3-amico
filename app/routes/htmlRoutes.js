const Express = require('express');
const Path = require('path');
const Router = Express.Router();
const UserController = require('../apis/userController.js');
const TopicController = require('../apis/topicController.js');

    
Router.get("/", function(req, res) {
    res.sendFile(Path.join(__dirname, "../public/login.html"));
});
  
Router.get("/login",function(req,res){
	res.sendFile(Path.join(__dirname, "../public/login.html"));
})

Router.get("/home", function(req, res) {
    res.sendFile(Path.join(__dirname, "../public/home.html"));
});

Router.get("/profile", function(req, res) {
    res.sendFile(Path.join(__dirname, "../public/profile.html"));
});

Router.get("/tutoring", function(req, res) {
  res.sendFile(Path.join(__dirname, "../public/tutoring.html"));
});


module.exports = Router;