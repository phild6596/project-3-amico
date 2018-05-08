<<<<<<< HEAD
<<<<<<< HEAD
// Import FirebaseAuth and firebase.
import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';

// Configure Firebase.
const firebaseConfig = {
      apiKey: "AIzaSyB7OxOuwuLaEwn9AsHT73dQrxPlnYA7pf0",
      authDomain: "project-amico.firebaseapp.com",
      databaseURL: "https://project-amico.firebaseio.com",
      projectId: "project-amico",
      storageBucket: "project-amico.appspot.com/",
      messagingSenderId: "765896442664"
};
firebase.initializeApp(firebaseConfig);

// Configure FirebaseUI.
const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: '/home',
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID
  ]
};

class Login extends React.Component {
  render() {
    return (
      <div>
          <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()}/>
      </div>
    );
  }
}

export default Login;
=======
=======
>>>>>>> ab6dd8eb3a392a169cc7d6e4f8ac1fd9dc000cf4
import React, {Component} from 'react';
import './Login.css';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {Motion, spring} from 'react-motion';
import NavigationPanel from './components/NavigationPanel';
import Modal from './components/Modal';

class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			mounted: false
		};
	}

	componentDidMount() {
		this.setState({ mounted: true });
	}
	
	handleSubmit = (e) => {
		this.setState({ mounted: false });
		e.preventDefault();
	}

	render() {
		const {mounted} = this.state;

		let child;
		let test = 12;

		if(mounted) {
			child = (
				<div className="App_test">
					<NavigationPanel></NavigationPanel>
					<Modal onSubmit={this.handleSubmit}/>
				</div>
			);
		}
		
		return(
			<div className="App">
				<ReactCSSTransitionGroup 
					transitionName="example"
					transitionEnterTimeout={500}
					transitionLeaveTimeout={300}>
						{child}
				</ReactCSSTransitionGroup>
			</div>
		);
	}
}

export default App;
<<<<<<< HEAD
>>>>>>> d5b3c3cf6a21ebe211c58fe6eca84ffdc7e7ffde
=======
>>>>>>> ab6dd8eb3a392a169cc7d6e4f8ac1fd9dc000cf4
