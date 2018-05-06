import React, { Component } from "react";
import moment from "moment";
import momentTimezone from "moment-timezone";
import translate from "./translate.js";

class MessageControler extends Component {
     createNewMessage = (data) => {
         const Message = {topicText: data};
         return Message //I think its topic, we'll see
     }
     translateMessage(topic, nativeLanguage, studiedLanguage, callback) {
         translate(topic, nativeLanguage, studiedLanguage, callback);
     }
}

export default MessageControler;
