const Express = require("express");
const Router = Express.Router();
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
//const firebaseAdmin = require("../apis/firebaseAdmin.js");
const UserController = require("../controllers");
const TopicController = require("../controllers");
const MessageController = require("../controllers");
const StorageController = require("../controllers");
=======
=======
>>>>>>> d5b3c3cf6a21ebe211c58fe6eca84ffdc7e7ffde
=======
>>>>>>> ab6dd8eb3a392a169cc7d6e4f8ac1fd9dc000cf4
const firebaseAdmin = require("../utils/firebaseAdmin.js");
const UserController = require("../controllers/userController");
const TopicController = require("../controllers/topicController");
const MessageController = require("../controllers/messageController");
const StorageController = require("../controllers/storageController");
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 0b0623e1f9a31069c71bdfa80ea5f6a7ac30bc99
=======
>>>>>>> d5b3c3cf6a21ebe211c58fe6eca84ffdc7e7ffde
=======
>>>>>>> ab6dd8eb3a392a169cc7d6e4f8ac1fd9dc000cf4

Router.post("/topic/search", function(req, res) {
  const idToken = req.body.idToken;

  const result = UserController.validateIdToken(idToken, function(language) {
    TopicController.getTopics(language, function(topics) {
      res.send(topics);
    });
  });
});

Router.get("/profiles", function(req, res) {
  const idToken = req.headers.idtoken;
  UserController.validateIdToken(idToken, function(uid) {
    UserController.getRecentUsers(function(users) {
      res.send(users);
    });
  });
});
Router.post("/message", function(req, res) {
  const topicText = MessageController.createNewMessage(req.body.topicText);
  const translatedMessage = MessageController.translateMessage(topicText.messageText,"en","es",function(data) {
      res.send(data);
    }
  );
});

<<<<<<< HEAD
<<<<<<< HEAD
Router.get("/profiles/:id", function(req, res) {
  const idToken = req.headers.idtoken;
  UserController.validateIdToken(idToken, function(uid) {
    UserController.getUser(uid, function(user) {
      res.send(user);
    });
  });
=======
Router.get("/api/profile/:id", function(req, res) {
  //const idToken = req.headers.idtoken;
  //res.send('SUP!');
  //UserController.validateIdToken(idToken, function(uid) {
    UserController.getUser(req.params.id, function(user) {
      res.send(user);
    });
  //});
>>>>>>> d5b3c3cf6a21ebe211c58fe6eca84ffdc7e7ffde
=======
Router.get("/api/profile/:id", function(req, res) {
  const idToken = req.headers.idtoken;
  UserController.validateIdToken(idToken, function() {
    UserController.getUser(req.params.id, function(user) {
      res.send(user);
    });
  });
>>>>>>> ab6dd8eb3a392a169cc7d6e4f8ac1fd9dc000cf4
});

Router.post("/profile/avatar", function(req, res) {
  console.log(req.body);
  //UserController.validateIdToken(idToken,function(uid){
  /*
      if(req.files.avatar){
        const avatar = req.files.avatar;
        const fileLocation = './uploads/photo.jpg';
        avatar.mv(fileLocation,function(err){
          if(!err){
              console.log('succeessfully moved file');
              StorageController.uploadAvatar(fileLocation, function(success){
                if(success){
                  UserController.setAvatarUrl(uid);
                }
            });
          }
          else{
            console.log(err);
          }

        });
      }*/

  // })
  //below needs to go into a function inside storage controller...
});
//New Profile
Router.post("/profile", function(req, res) {
  const idToken = req.body.idToken;
  const result = UserController.validateIdToken(idToken, function(uid) {
    const newUser = UserController.createNewUser(uid, req.body.user);
    UserController.insertUser(newUser);
  });
  res.send(result);
});
//Update Profile

Router.put("/profile", function(req, res) {
  const idToken = req.body.idToken;
});

Router.post("/topic", function(req, res) {
  const idToken = req.body.idToken;
  const result = UserController.validateIdToken(idToken, function(uid) {
    const text = req.body.topic.text;
    //console.log('UID: ' + uid);
    TopicController.createNewTopic(uid, text, function(topic) {
      TopicController.insertTopic(topic);
    });
  });
  res.send(result);
});

module.exports = Router;
