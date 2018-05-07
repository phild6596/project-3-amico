<<<<<<< HEAD
import axios from "axios";

const createNewTopic = (text) => {
    if(firebase.auth().currentUser){
        firebase.auth().currentUser.getIdToken(true).then((getIdToken)=> {
            axios.post('/topic', {topic:{text: 'Hello World'}, idToken:idToken}).then((data)=> {
=======
import React from "react";
import axios from "axios";
import firebase from "firebase";

import getTopics from "./getTopics.js";

const createNewTopic = (text) => {
    if(firebase.auth().currentUser){
        firebase.auth().currentUser.getIdToken(true).then((idToken)=> {
            axios.post('/topic', {topic:{text:text}, idToken:idToken}).then((data)=> {
>>>>>>> ab6dd8eb3a392a169cc7d6e4f8ac1fd9dc000cf4
                console.log(data);
                //getTopics();
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