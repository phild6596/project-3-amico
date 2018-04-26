import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { AboutCard } from './components/aboutCard/aboutCard';

class App extends Component {
  render() {

    const user = {
      lives: 'LA',
      from: 'LA',
      nativeLanguage: 'Armenian',
      studiedLanguage: 'English',      
    } 

    return (

      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">

        </p>
      <AboutCard user = {user}>
       
        </AboutCard>
      </div>
    );
  }
}

export default App;
