import React, { Component } from "react";
import axios from "axios";
import { Grid, Row } from "react-bootstrap";
import { AboutCard } from "../../components/aboutCard/aboutCard";

import firebaseConfig from "../../utils/firebase.js";
import firebase from "firebase";
import { InputBar } from "../../components/topicBar";
class Home extends Component {
  state = {
    currentUserId: "",
    currentUser: {},
    recentlyJoinedUsers: {},
    topicTextBox: ""
  };

  setCurrentUserId = userId => {
    this.setState({ currentUserId: userId });
  };

  setCurrentUser = currentUser => {
    this.setState({ currentUser: currentUser });
  };

  setLoggedInUserState = callback => {
    firebase.initializeApp(firebaseConfig);
    firebase.auth().onAuthStateChanged(user => {
      if (firebase.auth().currentUser) {
        console.log("LOGGED IN");
        this.setCurrentUserId(user.uid);
        console.log("USER ID: " + user.uid);
        callback(user.uid);
      } else {
        console.log("NOT LOGGED IN");
      }
    });
  };

//import axios from "axios";
//import firebase from "firebase";
 createNewTopic = (text) => {
    if(firebase.auth().currentUser){
      firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then(function(idToken) {
        axios.post('/topic',{topic:{text:text},idToken:idToken}).then(function(data){
           console.log(data)
           console.log(text);
           //getTopics();
         });
         console.log(text);
        }).catch(function(error) {
            //POP UP ERROR MODAL
            console.log('Error...' + error);
          });
    }
    else{
      //POPUP NOT SIGNED IN MODAL
      console.log('Not logged in...');
    }
  }

  loadUserProfile = profileId => {
    axios.get(`/api/profile/${profileId}`).then(response => {
      console.log(response.data);
      this.setCurrentUser(response.data);
    });
  };

  componentDidMount() {
    console.log("Sup from home page");
    this.setLoggedInUserState(userId => {
      this.loadUserProfile(userId);
      this.createNewTopic("Hello World");
    });
    
  }

  render() {
    return (
      <div>
        <Grid>
          <h1>Sup homie</h1>
          <Row>
            <AboutCard user={this.state.currentUser} />
          </Row>
        </Grid>
        <Grid>
          <Row>
          <InputBar />
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Home;
