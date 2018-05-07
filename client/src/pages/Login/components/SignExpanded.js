import React , {Component} from 'react';
import PropTypes from 'prop-types';
import '../Login.css';
import {Motion, spring} from 'react-motion';
import Input from './Input';
import SubmitButton from './SubmitButton';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';
import firebaseConfig from "../../../utils/firebase.js";


const uiConfig = {
	// Popup signin flow rather than redirect flow.
	signInFlow: 'popup',
	// Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
	signInSuccessUrl: '/home',
	// We will display Google and Facebook as auth providers.
	signInOptions: [
	  firebase.auth.GoogleAuthProvider.PROVIDER_ID,
	  firebase.auth.EmailAuthProvider.PROVIDER_ID,
	]
  };	


class SignExpanded extends Component {

	constructor(props) {
		super(props);
		this.state = {
			flexState: false,
			animIsFinished: false
		};
	}

	componentWillMount(){
		

		if(firebase.apps.length === 0){
			firebase.initializeApp(firebaseConfig);
		}
		
	  }

	componentDidMount () {
		 this.setState({flexState: !this.state.flexState});  
		
  	}


	isFinished = () => {
		this.setState({animIsFinished: true});
	}

	render () {
		return (
			<Motion style={{
				flexVal: spring(this.state.flexState ? 8 : 1)
			}} onRest={this.isFinished}>
			{({flexVal}) =>
			<div className={this.props.type=='signIn' ? 'signInExpanded' : 'signUpExpanded'} style={{
				flexGrow: `${flexVal}`
			}}>
				<Motion style={{ 
					opacity: spring(this.state.flexState ? 1 : 0,{stiffness: 300, damping: 17}),
					y: spring(this.state.flexState ? 0 : 50, {stiffness: 100, damping: 17})
				 }} >
						{({opacity, y}) =>
						<form className='logForm' style={{
							WebkitTransform: `translate3d(0, ${y}px, 0)`,
							transform: `translate3d(0, ${y}px, 0)`,
							opacity: `${opacity}`
						}}>
							<h2>{this.props.type == 'signIn' ? 'SIGN IN' : 'SIGN UP'}</h2>
							<StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()}/>
							{/*<Input
								id="login"
								type="text"
								placeholder="LOGIN" />
							<Input
								id="password"
								type="password"
								placeholder="PASSWORD" />
							<SubmitButton type={this.props.type}></SubmitButton>
							<a href="url" className='forgotPass'>{this.props.type == 'signIn' ? 'Forgot password?' : ''}</a>*/}
						</form>
						}
				</Motion>
			</div>
		}
			</Motion>
		);
	}

}

SignExpanded.PropTypes ={
	type: PropTypes.string	
};

export default SignExpanded;