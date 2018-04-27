import React, { Component } from "react";

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
  }

  render() {
    return (
      
      <div>
      <link rel="stylesheet" href="login.css"/>
      <h1>Sup Profile</h1>
      <AboutCard
      user = {this.state.user} >
      </AboutCard>
      </div>
    
    );
    
  }
}

export default Profile;
