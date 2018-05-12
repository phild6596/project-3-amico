import React from 'react';
import '../Login.css';
import {MdLocationOn} from 'react-icons/lib/md';

const NavigationPanel = (props) => {

	return (
		<div className='NavigationPanel'>
			<MdLocationOn size={70} onClick={props.initialState} className='logo'/>
			<div style={{flex: 8}}></div>
		</div>
	);
}

export default NavigationPanel;