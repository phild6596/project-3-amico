import axios from "axios";
import firebase from "firebase";

const getTopics = () => {
    let topics = [];

    if(firebase.auth().currentUser) {
        firebase.auth().currentUser.getIdToken(true).then((idToken) => {
            axios.post("/topic/search", {language:"english", idToken:idToken})
            .then((data) => {
                topics = [];
                console.log(data);
                data.map((topic) => {
                    //topics.push(formatopic(topic));
                })
                //topicContainer.empty();
                //topicContainer.append(topics);
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