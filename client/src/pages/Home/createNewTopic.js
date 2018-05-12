import axios from "axios";
import firebase from "firebase";

const createNewTopic = (text) => {
    if(firebase.auth().currentUser){
        firebase.auth().currentUser.getIdToken(true).then((idToken)=> {
            axios.post('/topic', {topic:{text:text}, idToken:idToken}).then((data)=> {
                //console.log(data);
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