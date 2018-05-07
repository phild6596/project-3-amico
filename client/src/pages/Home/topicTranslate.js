import React from "react";
import translate from "google-translate-api";
import axios from "axios";
//import MessageController from "./topicController";

const topicTranslate = (topicText) => {
    axios.post("/message", {
        topicText: topicText
    }).then((data) => {
        console.log("Created a new topic");
        console.log(data);
    })
}

export default topicTranslate;