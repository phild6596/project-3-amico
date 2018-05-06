import React from "react";


const TopicController = {
    createNewTopic: (data) => {
        const Topic = { topicText: data };
        return Topic;
    },
    translateTopic(message, nativeLanguage, studiedLanguage, callback) {
       // AmicosTranslator(message, nativeLanguage, studiedLanguage, callback);
    }
}

export default TopicController;