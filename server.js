const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser');
const path = require('path');
const htmlRoutes = require('./routes/htmlRoutes.js');
const apiRoutes = require('./routes/apiRoutes.js');
const morgan = require('morgan');
const bluebird = require("bluebird");
const mongoose = require("mongoose");

	const Server = {
		port : 8080,
		app : express(),
	}

	Server.app.use(express.static(publicDirectory));
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
	  
Server.app.listen(process.env.PORT || Server.port);

