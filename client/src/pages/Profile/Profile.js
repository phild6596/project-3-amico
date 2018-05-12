import React, { Component } from "react";
import axios from "axios";
import {ProfileCard} from "../../components/profileCard/profileCard";
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
  
  
  setLoggedInUserState = (callback) => {
    firebase.initializeApp(firebaseConfig);
    firebase.auth().onAuthStateChanged((user)=>{
      if(firebase.auth().currentUser){
        console.log('LOGGED IN');
        this.setCurrentUserId(user.uid);
        user.getIdToken(true).then((idToken) =>{
          callback(user.uid, idToken );
        });

        
      }else{
        console.log('NOT LOGGED IN');
      }
    });
  }

  loadCurrentUserProfile = (profileId,idToken)=>{
    axios.get(`/api/profile/${profileId}`,{headers:{'idToken' :idToken}}).then((response)=>{
      console.log('LOADING CURRENT USER');
      console.log(response.data);
      this.setCurrentUser(response.data);
    })
  }
  loadTargetUserProfile = (profileId, idToken) => {
    axios.get(`/api/profile/${profileId}`,{headers:{'idToken' :idToken}}).then((response)=>{
      console.log('LOADING TARGET USER');
      console.log(response.data);
      this.setTargetUser(response.data);
    })
   }
    
  componentDidMount() {
    console.log("Sup from Profile page");
    
    

    this.setLoggedInUserState((currentUserId, idToken)=>{
      let targetUserId = this.props.match.params.id;
      this.loadCurrentUserProfile(currentUserId, idToken);

      if(!targetUserId){
        this.setTargetUserId(currentUserId);
      }else{
        this.setTargetUserId(targetUserId);
      }
      
      this.loadTargetUserProfile(this.state.targetUserId, idToken);
    });
    

  }

  render() {
    return (
      <div>
      <div className="nav-style">
        <NavBar titleColor= "white" linkColor= "white" navData= {navLinks} avatarPhoto={this.state.currentUser.avatarUrl}/>
      </div>
      <div className="cover">        
        <ProfileCard user={this.state.targetUser}/>
      </div>
      </div>
    )
    
  }
}

export default Profile;