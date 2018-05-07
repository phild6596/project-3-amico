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
<<<<<<< HEAD
<<<<<<< HEAD
        
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/profile/:id" component={Profile} />
          <Route exact path="/" component={Login} />
          
=======
=======
>>>>>>> ab6dd8eb3a392a169cc7d6e4f8ac1fd9dc000cf4
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/profile/:id" component={Profile} />
          <Route exact path="/profile" component={Profile}/>
          <Route exact path="/" component={Login} />
<<<<<<< HEAD
>>>>>>> d5b3c3cf6a21ebe211c58fe6eca84ffdc7e7ffde
=======
>>>>>>> ab6dd8eb3a392a169cc7d6e4f8ac1fd9dc000cf4
        </Switch>
      </div>
    </Router>

    );
  }
}

export default App;
