import React from "react";
import axios from "axios";

const messageTranslate = (/* add topicText here*/) => {
    axios.post("/message", {
        //topicText: topicText
    }).then((data) => {
        console.log("created a new message");
        console.log(data);
    });
};

export default messageTranslate;