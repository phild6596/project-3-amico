import React, { Component } from "react";
import moment from "moment";
import momentTimezone from "moment-timezone";
import amicosTranslate from "./translate.js";
import translate from "google-translate-api";

class TopicControler extends Component {
     createNewMessage = (data) => {
         const Message = {topicText: data};
         return Message //I think its topic, we'll see
     }
     translateMessage(topic, nativeLanguage, studiedLanguage, callback) {
         amicosTranslate(topic, nativeLanguage, studiedLanguage, callback);
     }
}

export default TopicControler;
