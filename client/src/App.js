import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import { AboutCard } from './components/aboutCard/aboutCard';
import Login from './pages/Login/Login.js'
import Home from './pages/Home/Home.js'
import Profile from './pages/Profile/Profile.js'

class App extends Component {
  render() {

    const user = {
      lives: 'LA',
      from: 'LA',
      nativeLanguage: 'Armenian',
      studiedLanguage: 'English',      
    } 

    return (

      <Router>
      <div>
        
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/profile/:id" component={Profile} />
          
        </Switch>
      </div>
    </Router>

    );
  }
}

export default App;
