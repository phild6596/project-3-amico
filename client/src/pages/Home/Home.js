import React, { Component } from "react";
import axios from "axios";
import {Grid,Row} from "react-bootstrap";
import {AboutCard} from "../../components/aboutCard/aboutCard";

import firebaseConfig from "../../utils/firebase.js";
import firebase from "firebase";
class Home extends Component {
  state = {
    currentUserId : '',
    currentUser : {},
    recentlyJoinedUsers : {

    },
    topicTextBox : ''
  };

  setCurrentUserId =(userId) => {
    this.setState({currentUserId : userId});
  }

  setCurrentUser = (currentUser) =>{
    this.setState({currentUser : currentUser});
  }

  setLoggedInUserState = (callback) => {
    firebase.initializeApp(firebaseConfig);
    firebase.auth().onAuthStateChanged((user)=>{
      if(firebase.auth().currentUser){
        console.log('LOGGED IN');
        this.setCurrentUserId(user.uid);
        console.log('USER ID: ' + user.uid);
        callback(user.uid);
      }else{
        console.log('NOT LOGGED IN');
      }
    });
  }

  loadUserProfile = (profileId) => {
   axios.get(`/api/profile/${profileId}`).then((response)=>{
     console.log(response.data);
     this.setCurrentUser(response.data);
   })
  }

getTopics = () => {
  if(firebase.auth().currentUser){
    firebase.auth().currentUser.getIdToken(true).then(() => {
      axios.post('/topic/search', {language:'english', idToken:idToken})
      .then((data) => {
        topics = [];
        console.log(data);
        data.map((topic) => {
          topics.push(formatTopic(topic));
        });
        topicContainer.empty();
        topicContainer.append(topics);
      })
    }).catch((error) => {
      //POP UP ERROR MODAL
      console.log("ERROR...", error);
    });
  }
  else{
    //POPUP NOT SIGNED IN MODAL
    console.log("NOT LOGGED IN");
  }
}

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
    this.setLoggedInUserState((userId)=>{
      this.loadUserProfile(userId);
    });
    
  
  }
  
  render() {
    return (
    <div>
      <Grid>
        <h1>Sup homie</h1>
        <Row>
        <AboutCard user={this.state.currentUser}/>
        </Row>  
      </Grid>
    </div>
  );
  }
}

export default Home;
