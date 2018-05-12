import React, { Component } from "react";

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

class Home extends Component {
  state = {
    currentUserId: "",
    currentUser: {},
    recentlyJoinedUsers: {},
    topicText: "",
    topics :[]
  };

  

  
  listenForTopics = ()=>{
    
    const topicReference = firebase.database().ref('topics/');
    topicReference.on('value', (snapshot) => {
      this.setState({topics:[]});

      getTopics((topics)=>{
        topics.map((topic)=>{
         topic.timestamp = this.convertTimeStamp(topic.timestamp);
        })
        this.setState({topics:topics});
      })
      //const snapObject = snapshot.val();

      /*for(let user in snapObject){
        
        for(let topic in snapObject[user]){
         snapObject[user][topic].timestamp = this.convertTimeStamp(snapObject[user][topic].timestamp);
         this.setState({topics:this.state.topics.concat(snapObject[user][topic])});
        }
      }*/
    });
  }

  createNewUser = (userId, idToken) =>{
    axios.post('/profile', {idToken : idToken, uid:userId}).then((data)=>{
      this.loadUserProfile(userId,idToken);
    })
  }
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

  
    convertTimeStamp = (time)=>{
      
      const convertedTime = moment.tz(time, moment.tz.guess()).format('h:mm:ss A - MM/DD/YYYY');
      return convertedTime;
    }
  handleSubmit = ()=>{
    createNewTopic(this.state.topicText)
    this.setState({topicText:''});
  }
    
  componentDidMount() {
    console.log("Sup from home page");
    this.setLoggedInUserState((userId,idToken) => {
      this.loadUserProfile(userId, idToken);
      
      //getTopics((topics)=>{
        this.listenForTopics();
      //})
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


            <TopicInput name="topicText" onChange={this.handleInputChange} value={this.state.topicText} handleSubmit={this.handleSubmit}/>
            {/* <TopicButton handleSubmit={this.handleSubmit}/> */}
            
            {this.state.topics.length ? (this.state.topics.map((topic,index)=>{
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
  }
}

export default Home;
