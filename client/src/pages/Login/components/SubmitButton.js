import React from 'react';
import PropTypes from 'prop-types';
import '../Login.css';
import {MdArrowForward} from 'react-icons/lib/md';
import {FaGooglePlus} from 'react-icons/lib/fa';


const SubmitButton = (props) => {

	let socialNets = null;

	if (props.type === 'signIn') {
		socialNets = (
			<div className='socialNets'>
			{/*should display Google Login via Google Account*/}
				<FaGooglePlus className='socialNetsIcon' onClick={()=>console.log('SUP')}/>
			</div>
		)
	} 
	else {
		socialNets = (
			<div className='socialNets'>
			</div>
		)
	}
	return (
		<div className={'submitButton'}>
			{socialNets}
			<button className={props.type==='signIn' ? 'submitSignIn' : 'submitSignUp'}><MdArrowForward onClick={()=>console.log('Submit')}/></button>
		</div>
	);
} 

SubmitButton.PropTypes = {
	type: PropTypes.String
};

export default SubmitButton;