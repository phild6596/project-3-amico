const express = require("express");
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
const mongoose = require("mongoose");
const bluebird = require("bluebird");
const bodyParser = require("body-parser");
const path = require("path");

const PORT = process.env.PORT || 3001;
mongoose.Promise = bluebird;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
} else {
  app.use(express.static(__dirname + "/client/public"));
}

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// const articleController = require("./server/controllers/article-controller");
// const router = new express.Router();
// router.get("/api/saved", articleController.find);
// router.post("/api/saved", articleController.insert);
// router.delete("/api/saved/:id", articleController.delete);
// router.get("/*", (req, res) => {
//   res.sendFile(path.join(__dirname, "./client/build, index.html"));
// });

//app.use(router);

const db = process.env.MONGODB_URI || "mongodb://localhost/project-3-amico";
mongoose.connect(db, err => {
  if (err) {
    console.log("Mongo db error: ", err);
  } else {
    console.log("Mongo db is now connected!");
  }
});

app.listen(PORT, () => {
  console.log(`🌎 server is now listening on ${PORT}!, dont tell Zuckerberg`);
});
=======
=======
>>>>>>> d5b3c3cf6a21ebe211c58fe6eca84ffdc7e7ffde
=======
>>>>>>> ab6dd8eb3a392a169cc7d6e4f8ac1fd9dc000cf4
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser');
const path = require('path');
const htmlRoutes = require('./routes/htmlRoutes.js');
const apiRoutes = require('./routes/apiRoutes.js');
const morgan = require('morgan');
const bluebird = require("bluebird");
const mongoose = require("mongoose");
<<<<<<< HEAD
<<<<<<< HEAD

	const Server = {
		port : 8080,
		app : express(),
	}

	Server.app.use(express.static(publicDirectory));
=======
=======
>>>>>>> ab6dd8eb3a392a169cc7d6e4f8ac1fd9dc000cf4
const expressFileUpload = require('express-fileupload');

	const Server = {
		port : 3001,
		app : express(),
	}


<<<<<<< HEAD
>>>>>>> d5b3c3cf6a21ebe211c58fe6eca84ffdc7e7ffde
=======
>>>>>>> ab6dd8eb3a392a169cc7d6e4f8ac1fd9dc000cf4
	Server.app.use(bodyParser.urlencoded({ extended: true }));
	Server.app.use(bodyParser.json());
	Server.app.use(expressFileUpload());
	Server.app.use(cookieParser());
	Server.app.use(morgan('dev'));
	Server.app.use(htmlRoutes);
	Server.app.use(apiRoutes);

	if (process.env.NODE_ENV === "production") {
		Server.app.use(express.static("client/build"));
	  } else {
		Server.app.use(express.static(__dirname + "/client/public"));
	  }

	  Server.app.use((req, res, next) => {
		res.header("Access-Control-Allow-Origin", "*");
		res.header(
		  "Access-Control-Allow-Headers",
		  "Origin, X-Requested-With, Content-Type, Accept"
		);
		next();
	  });


	const db = process.env.MONGODB_URI || "mongodb://localhost/project-3-amico";
	mongoose.connect(db, err => {
	if (err) {
		console.log("Mongo db error: ", err);
	} else {
		console.log("Mongo db is now connected!");
	}
	});
	  
<<<<<<< HEAD
<<<<<<< HEAD
Server.app.listen(process.env.PORT || Server.port);

>>>>>>> 0b0623e1f9a31069c71bdfa80ea5f6a7ac30bc99
=======
Server.app.listen( Server.port);

>>>>>>> d5b3c3cf6a21ebe211c58fe6eca84ffdc7e7ffde
=======
Server.app.listen( Server.port);

>>>>>>> ab6dd8eb3a392a169cc7d6e4f8ac1fd9dc000cf4
