import React from "react";
import axios from "axios";
import firebase from "firebase";
import topicTranslate from "./topicTranslate";

const getTopics = (callback) => {
    if(firebase.auth().currentUser) {
        firebase.auth().currentUser.getIdToken(true).then((idToken) => {
            axios.post("/topic/search", {language:"english", idToken:idToken})
            .then((data) => {
<<<<<<< HEAD
                console.log(data);
                topicTranslate(callback);
=======
                //console.log('Within data.data in getTopics');
                //console.log(data.data);

>>>>>>> 76bc7d407f2ff273094e427c1e2f99cb4b1ef2e2
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