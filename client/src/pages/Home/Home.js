import React, { Component } from "react";
import axios from "axios";

import {Grid,Row} from "react-bootstrap";
import {AboutCard} from "../../components/aboutCard/aboutCard";

import firebaseConfig from "../../utils/firebase.js";
import firebase from "firebase";
import { InputBar } from "../../components/inputBar";
import { TopicButton } from "../../components/topicButton";
import createNewTopic from "./createNewTopic.js";
import getTopics from "./getTopics.js";
import AmicosTranslator from "./messageTranslate";


class Home extends Component {
  state = {
    currentUserId: "",
    currentUser: {},
    recentlyJoinedUsers: {},
    topicText: ""
 
  };

  handleInputChange = event => {
    // Destructure the name and value properties off of event.target
    // Update the appropriate state
    const { name, value } = event.target;
    this.setState({
      [name] : value
    });
    console.log(this.state.topicText);
  };

  setCurrentUserId =(userId) => {
    this.setState({currentUserId : userId});
  }


  setCurrentUser = currentUser => {
    this.setState({ currentUser: currentUser });
  };

  setLoggedInUserState = callback => {
    firebase.initializeApp(firebaseConfig);
    firebase.auth().onAuthStateChanged(user => {
      if (firebase.auth().currentUser) {
        console.log("LOGGED IN");

        this.setCurrentUserId(user.uid);

        user.getIdToken(true).then((idToken) =>{
          callback(user.uid, idToken );
        });
        console.log("USER ID: " + user.uid);
        
      } else {
        console.log("NOT LOGGED IN");
      }
    });
  };

  loadUserProfile = (profileId, idToken) => {
    axios.get(`/api/profile/${profileId}`, {headers:{'idToken' :idToken}}).then(response => {
      console.log(response.data);
      this.setCurrentUser(response.data);
    });
  };

  componentDidMount() {
    console.log("Sup from home page");
    this.setLoggedInUserState((userId,idToken) => {
      this.loadUserProfile(userId, idToken);
      getTopics();   
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
            <InputBar name="topicText" value={this.state.topicText} onChange={this.handleInputChange} placeholder="Start a new discussion!" />
            <TopicButton 
              onClick ={createNewTopic}
              text = {this.state.topicText}
            />
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Home;
