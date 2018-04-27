import React, { Component } from "react";
import { Link } from "react-router-dom";
import {AboutCard} from "../../components/aboutCard/aboutCard";

class Profile extends Component {
  state = {};
  user = {
    name: 'bobo',
    lives: ' LA',
    nativeLanguage: 'English',
    studiedLanguage: ' Spanish'
  }
  componentDidMount() {
    console.log("Sup from Profile page");
  }

  render() {
    return (
      <div>
      <h1>Sup Profile</h1>
      <AboutCard user={user}>
      </AboutCard>
      </div>
    
    );
    
  }
}

export default Profile;
