import React from "react";
import axios from "axios";
import firebase from "firebase";

import getTopics from "./getTopics.js";

const createNewTopic = (text) => {
    if(firebase.auth().currentUser){
        firebase.auth().currentUser.getIdToken(true).then((idToken)=> {
            axios.post('/topic', {topic:{text:text}, idToken:idToken}).then((data)=> {
                console.log(data);
                getTopics();
            });
        }).catch((error)=> {
            console.log('Error...', error);
        });
    }
    else{
        console.log('Not Logged in...');
    }
}

export default  createNewTopic;