import React from "react";
import axios from "axios";
import firebase from "firebase";
import topicTranslate from "./topicTranslate";

const getTopics = (callback) => {
    if(firebase.auth().currentUser) {
        firebase.auth().currentUser.getIdToken(true).then((idToken) => {
            axios.post("/topic/search", {language:"english", idToken:idToken})
            .then((data) => {
                //console.log('Within data.data in getTopics');
                //console.log(data.data);
                topicTranslate(data);
                callback(data.data);
            });
        }).catch((error) => {
            console.log("Error in getTopics.js", error);
        })
    }
    else{
        console.log("Not logged in...");
    }
}

export default getTopics;