import React, { Component } from "react";
import axios from "axios";
import {AboutCard} from "../../components/aboutCard/aboutCard";
import {CardBackground} from "../../components/cardBackground/cardBackground.js";
import firebaseConfig from "../../utils/firebase.js";
import firebase from "firebase";
  class Profile extends Component {
  state = {
    currentUser : {},
    currentUserId : '',
    targetUserId : '',
    targetUser : {}
  };

  setCurrentUserId =(userId) =>{
    this.setState({currentUserId : userId});
    console.log('CURRENT USER ID: ' + userId);
  }
  
  setCurrentUser = (user)=>{
    this.setState({currentUser : user});
  }
  setTargetUserId =(userId) => {
    this.setState({targetUserId : userId});
  }
  setTargetUser = (user) =>{
    this.setState({targetUser : user});
  }
  
  setLoggedInUserState = (callback) => {
    firebase.initializeApp(firebaseConfig);
    firebase.auth().onAuthStateChanged((user)=>{
      if(firebase.auth().currentUser){
        console.log('LOGGED IN');
        this.setCurrentUserId(user.uid);
        callback(user.uid);
      }else{
        console.log('NOT LOGGED IN');
      }
    });
  }

  loadCurrentUserProfile = (profileId)=>{
    axios.get(`/api/profile/${profileId}`).then((response)=>{
      console.log('LOADING CURRENT USER');
      console.log(response.data);
      this.setCurrentUser(response.data);
    })
  }
  loadTargetUserProfile = (profileId) => {
    axios.get(`/api/profile/${profileId}`).then((response)=>{
      console.log('LOADING TARGET USER');
      console.log(response.data);
      this.setTargetUser(response.data);
    })
   }
    
  componentDidMount() {
    console.log("Sup from Profile page");
    
    
    this.setLoggedInUserState((currentUserId)=>{
      let targetUserId = this.props.match.params.id;
      this.loadCurrentUserProfile(currentUserId);

      if(!targetUserId){
        this.setTargetUserId(currentUserId);
      }else{
        this.setTargetUserId(targetUserId);
      }
      
      this.loadTargetUserProfile(this.state.targetUserId);
    });
    

  }

  render() {
    return (
      <div>
        <AboutCard user={this.state.targetUser}/>
      </div>
    )
    
  }
}

export default Profile;
