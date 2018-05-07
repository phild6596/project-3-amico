import axios from "axios";
import firebase from "firebase";

const getTopics = (callback) => {
    if(firebase.auth().currentUser) {
        firebase.auth().currentUser.getIdToken(true).then((idToken) => {
            axios.post("/topic/search", {language:"english", idToken:idToken})
            .then((data) => {
                console.log(data);
                
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