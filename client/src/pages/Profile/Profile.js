import React, { Component } from "react";
<<<<<<< HEAD
<<<<<<< HEAD

import {AboutCard} from "../../components/aboutCard/aboutCard";

class Profile extends Component {
  state = {
    user : {
      name: 'bobo',
      lives: ' LA',
      nativeLanguage: 'English',
      studiedLanguage: ' Spanish'
    }
  };

 
    
  componentDidMount() {
    console.log("Sup from Profile page");
=======
=======
>>>>>>> ab6dd8eb3a392a169cc7d6e4f8ac1fd9dc000cf4
import axios from "axios";
import {AboutCard} from "../../components/aboutCard/aboutCard";
import {CardBackground} from "../../components/cardBackground/cardBackground.js";
import firebaseConfig from "../../utils/firebase.js";
import firebase from "firebase";
import NavBar from '../../components/navBar/NavBar.js';
  

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
  
<<<<<<< HEAD
=======
  
>>>>>>> ab6dd8eb3a392a169cc7d6e4f8ac1fd9dc000cf4
  setLoggedInUserState = (callback) => {
    firebase.initializeApp(firebaseConfig);
    firebase.auth().onAuthStateChanged((user)=>{
      if(firebase.auth().currentUser){
        console.log('LOGGED IN');
        this.setCurrentUserId(user.uid);
<<<<<<< HEAD
        callback(user.uid);
=======
        user.getIdToken(true).then((idToken) =>{
          callback(user.uid, idToken );
        });

        
>>>>>>> ab6dd8eb3a392a169cc7d6e4f8ac1fd9dc000cf4
      }else{
        console.log('NOT LOGGED IN');
      }
    });
  }

<<<<<<< HEAD
  loadCurrentUserProfile = (profileId)=>{
    axios.get(`/api/profile/${profileId}`).then((response)=>{
=======
  loadCurrentUserProfile = (profileId,idToken)=>{
    axios.get(`/api/profile/${profileId}`,{headers:{'idToken' :idToken}}).then((response)=>{
>>>>>>> ab6dd8eb3a392a169cc7d6e4f8ac1fd9dc000cf4
      console.log('LOADING CURRENT USER');
      console.log(response.data);
      this.setCurrentUser(response.data);
    })
  }
<<<<<<< HEAD
  loadTargetUserProfile = (profileId) => {
    axios.get(`/api/profile/${profileId}`).then((response)=>{
=======
  loadTargetUserProfile = (profileId, idToken) => {
    axios.get(`/api/profile/${profileId}`,{headers:{'idToken' :idToken}}).then((response)=>{
>>>>>>> ab6dd8eb3a392a169cc7d6e4f8ac1fd9dc000cf4
      console.log('LOADING TARGET USER');
      console.log(response.data);
      this.setTargetUser(response.data);
    })
   }
    
  componentDidMount() {
    console.log("Sup from Profile page");
    
    
<<<<<<< HEAD
    this.setLoggedInUserState((currentUserId)=>{
      let targetUserId = this.props.match.params.id;
      this.loadCurrentUserProfile(currentUserId);
=======

    this.setLoggedInUserState((currentUserId, idToken)=>{
      let targetUserId = this.props.match.params.id;
      this.loadCurrentUserProfile(currentUserId, idToken);
>>>>>>> ab6dd8eb3a392a169cc7d6e4f8ac1fd9dc000cf4

      if(!targetUserId){
        this.setTargetUserId(currentUserId);
      }else{
        this.setTargetUserId(targetUserId);
      }
      
<<<<<<< HEAD
      this.loadTargetUserProfile(this.state.targetUserId);
    });
    

>>>>>>> d5b3c3cf6a21ebe211c58fe6eca84ffdc7e7ffde
=======
      this.loadTargetUserProfile(this.state.targetUserId, idToken);
    });
    

>>>>>>> ab6dd8eb3a392a169cc7d6e4f8ac1fd9dc000cf4
  }

  render() {
    return (
<<<<<<< HEAD
<<<<<<< HEAD
      
      <div>
      <link rel="stylesheet" href="login.css"/>
      <h1>Sup Profile</h1>
      <AboutCard
      user = {this.state.user} >
      </AboutCard>
      </div>
    
    );
=======
=======
>>>>>>> ab6dd8eb3a392a169cc7d6e4f8ac1fd9dc000cf4
      <div>
        <NavBar titleColor= "white" linkColor= "white" navData= {navLinks} avatarPhoto={this.state.currentUser.avatarUrl}/>
        <AboutCard user={this.state.targetUser}/>
      </div>
    )
<<<<<<< HEAD
>>>>>>> d5b3c3cf6a21ebe211c58fe6eca84ffdc7e7ffde
=======
>>>>>>> ab6dd8eb3a392a169cc7d6e4f8ac1fd9dc000cf4
    
  }
}

export default Profile;
