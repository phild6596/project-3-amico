import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//import logo from './logo.svg';
import './App.css';

import Login from './pages/Login/Login.js'
import Home from './pages/Home/Home.js'
import Profile from './pages/Profile/Profile.js'

class App extends Component {
  render() {

    return (

      <Router>
      <div>
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/profile/:id" component={Profile} />
          <Route exact path="/profile" component={Profile}/>
          <Route exact path="/" component={Login} />
        </Switch>
      </div>
    </Router>

    );
  }
}

export default App;
