import React from 'react';

import './Welcome.css';

const Welcome = ({ client }) => {
	const { name, profilePic, status } = client;
	const firstName = name.split(' ')[0];
	return (
		<div className="Welcome">
			<h1 className="Welcome__name">Welcome, {firstName}</h1>
			<img src={profilePic} alt={`${name} photo`} className="Welcome__pic" />
			<p className="Welcome__status">
				<b>Status:</b> {status}
			</p>
			<button className="Welcome__btn">Start a conversation</button>
			<p className="Welcome__info">
				Search for someone to start chatting with or go to Contacts to see who
				is available
			</p>
		</div>
	);
};

export default Welcome;
