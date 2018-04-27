import React, { Component } from "react";
import axios from "axios";
import firebase from "firebase";
import MessageButton from "../components/messageButton";

class Home extends Component {
  state = {};

createNewTopic = (text) => {
  if(firebase.auth().currentUser){
    firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then((idToken) => {
      axios.post('/topic', {topic:{text:"hello"}, idToken:idToken}).then((data) => {
        console.log(data);
        getTopics();
      });
    }).catch((error) => {
      console.log("Error: ", error);
    })
  }
  else{
    console.log("Not Logged in...");
  }
}

  componentDidMount() {
    console.log("Sup from home page");
  }

  render() {
    return (
    <div>
      <h1>Sup homie</h1>
        <MessageButton onClick = {this.createNewTopic} />
    </div>);
  }
}

export default Home;
