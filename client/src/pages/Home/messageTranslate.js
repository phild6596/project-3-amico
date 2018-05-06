import React, { Component } from "react";
import axios from "axios";
import translate from "google-translate-api";
import TopicController from "./topicController.js";

class AmicosTranslator extends Component {

messageTranslate = (topicText) => {
    axios.post("/message",(req, res) => {
        const topicText = TopicController.createNewTopic(req.body.topicText);
        const translatedTopic = TopicController.translateTopic(topicText.topicText,"en", "es", (data) => {
            res.send(data);
        })
    }).then((data) => {
        console.log("created a new message");
        console.log(data);
    });
};

AmicosTranslate = (message, nativeLanguage, studiedLanguage, callback) => {
    translate(message, {from: nativeLanguage, to: studiedLanguage})
    .then((res) => {
        const translated = {
            originalMessage: message,
            autocorrectedMessage: res.from.text.value,
            correctedMessage: res.from.text.value,
            didYouMean: res.from.text.didYouMean,
            translatedMessage: res.text
        }
        // for (finalMessage in translated) {
        //     // this was in the original code
        // }
        callback(translated);
    })
    .catch(err => {
        console.log("Error in AmicosTranslate ", err);
    });
}
}
export default AmicosTranslator;