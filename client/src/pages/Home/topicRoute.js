import React from "react";
import axios from "axios";
import TopicControler from "./topicController";
//import { BrowserRouter, Route, Link } from 'react-router-dom';



axios.post("/message", (req, res)=> {
    const topicText = MessageController.createNewMessage(req.body.topictext);
    const translatedMessage = MessageController.translateMessage(topicText.messagetext, "en", "es", (data) => {
        res.send(data);
    });
});