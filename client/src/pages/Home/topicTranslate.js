import React from "react";
import axios from "axios";

const topicTranslate = (text) => {
    axios.post("/topic", {
        topic:{text:text}
    }).then(data => {
        console.log("translating topic");
        console.log(data);
    }) 
}

export default topicTranslate;