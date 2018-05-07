import React, { Component } from "react";
<<<<<<< HEAD
<<<<<<< HEAD


class Home extends Component {
  state = {};

  componentDidMount() {
    console.log("Sup from home page");
  }

  render() {
    return (<h1>Sup homie</h1>);
=======
import axios from "axios";

import {Grid,Row} from "react-bootstrap";
import {AboutCard} from "../../components/aboutCard/aboutCard";

import firebaseConfig from "../../utils/firebase.js";
import firebase from "firebase";
import { InputBar } from "../../components/topicBar";
=======

import axios from "axios";

import {Grid,Row,Col} from "react-bootstrap";
import {AboutCard} from "../../components/aboutCard/aboutCard";
import {TopicRow} from "../../components/topicFeed/topicRow";
import firebaseConfig from "../../utils/firebase.js";
import firebase from "firebase";
import { TopicInput } from "../../components/topicFeed/topicInput";
import { TopicButton } from "../../components/topicFeed/topicButton";
import createNewTopic from "./createNewTopic.js";
import getTopics from "./getTopics.js";
import Footer from '../../components/footer/Footer.js';
import NavBar from '../../components/navBar/NavBar.js';
import moment from "moment";
import momentTimezone from "moment-timezone";

import './css/home.css';

const navLinks = [
  {
      title: "Home",
      href: "/home"
  },
  {
      title: "Profile",
      href: "/profile"
  }
];

>>>>>>> ab6dd8eb3a392a169cc7d6e4f8ac1fd9dc000cf4
class Home extends Component {
  state = {
    currentUserId: "",
    currentUser: {},
    recentlyJoinedUsers: {},
<<<<<<< HEAD
    topicTextBox: ""
=======
    topicText: "",
    topics :[]
  };

  

  
  listenForTopics = ()=>{
    
    const topicReference = firebase.database().ref('topics/');
    topicReference.on('value', (snapshot) => {
      this.setState({topics:[]});
      const snapObject = snapshot.val();
      for(let user in snapObject){
        
        for(let topic in snapObject[user]){
          console.log(snapObject[user][topic]);
         this.setState({topics:this.state.topics.concat(snapObject[user][topic])});
        }
        
        
      }
       

      
      
    });
  }
  handleInputChange = event => {
    // Destructure the name and value properties off of event.target
    // Update the appropriate state
    const { name, value } = event.target;
    this.setState({
      [name] : value
    });
    console.log(this.state.topicText);
>>>>>>> ab6dd8eb3a392a169cc7d6e4f8ac1fd9dc000cf4
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
<<<<<<< HEAD
        this.setCurrentUserId(user.uid);
        console.log("USER ID: " + user.uid);
        callback(user.uid);
=======

        this.setCurrentUserId(user.uid);

        user.getIdToken(true).then((idToken) =>{
          callback(user.uid, idToken );
        });
        console.log("USER ID: " + user.uid);
        
>>>>>>> ab6dd8eb3a392a169cc7d6e4f8ac1fd9dc000cf4
      } else {
        console.log("NOT LOGGED IN");
      }
    });
  };

<<<<<<< HEAD
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
=======
  loadUserProfile = (profileId, idToken) => {
    axios.get(`/api/profile/${profileId}`, {headers:{'idToken' :idToken}}).then(response => {
>>>>>>> ab6dd8eb3a392a169cc7d6e4f8ac1fd9dc000cf4
      console.log(response.data);
      this.setCurrentUser(response.data);
    });
  };

<<<<<<< HEAD
  componentDidMount() {
    console.log("Sup from home page");
    this.setLoggedInUserState(userId => {
      this.loadUserProfile(userId);

      
    });
    this.createNewTopic('sup');
  

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
>>>>>>> d5b3c3cf6a21ebe211c58fe6eca84ffdc7e7ffde
=======
  
    convertTimeStamp = (time)=>{
      
      const convertedTime = moment.tz(time, moment.tz.guess()).format('h:mm:ss A - MM/DD/YYYY');
      return convertedTime;
    }
  
    
  componentDidMount() {
    console.log("Sup from home page");
    this.setLoggedInUserState((userId,idToken) => {
      this.loadUserProfile(userId, idToken);
      getTopics((topics)=>{
        this.listenForTopics();
      })
    });
    
  }

  render() {
    
    return (
      
      <div>

        <NavBar titleColor= "white" linkColor= "white" navData= {navLinks} avatarPhoto={this.state.currentUser.avatarUrl}/>
        <Grid className="home-container">
        <Row>
          <Col xs={6} md={3} >
            <AboutCard user={this.state.currentUser}/>
          </Col>
          <Col xs={6} md={6} className="chat-container">
            <TopicInput name="topicText" onChange={this.handleInputChange} value={this.state.topicText}/>
            <TopicButton onClick={createNewTopic} text={this.state.topicText}/>
            
            {this.state.topics.length ? (this.state.topics.map((topic,index)=>{
              topic.timestamp = this.convertTimeStamp(topic.timestamp);
              return (
                <TopicRow key={index} topic={topic}/>
              )}
            )) : (null)}

          </Col>
          <Col xs={6} md={3}>
          <AboutCard user={this.state.currentUser}/>
          </Col>
        </Row>
        </Grid>
        <Footer />

       
      </div>
    );
>>>>>>> ab6dd8eb3a392a169cc7d6e4f8ac1fd9dc000cf4
  }
}

export default Home;
