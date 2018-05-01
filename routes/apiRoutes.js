const Express = require("express");
const Router = Express.Router();
const firebaseAdmin = require("../utils/firebaseAdmin.js");
const UserController = require("../controllers/userController");
const TopicController = require("../controllers/topicController");
const MessageController = require("../controllers/messageController");
const StorageController = require("../controllers/storageController");

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

Router.get("/api/profile/:id", function(req, res) {
  //const idToken = req.headers.idtoken;
  //res.send('SUP!');
  //UserController.validateIdToken(idToken, function(uid) {
    UserController.getUser(req.params.id, function(user) {
      res.send(user);
    });
  //});
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
