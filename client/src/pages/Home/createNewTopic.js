import axios from "axios";

const createNewTopic = (text) => {
    if(firebase.auth().currentUser){
        firebase.auth().currentUser.getIdToken(true).then((getIdToken)=> {
            axios.post('/topic', {topic:{text: 'Hello World'}, idToken:idToken}).then((data)=> {
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