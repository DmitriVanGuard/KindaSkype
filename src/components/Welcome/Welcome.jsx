import React from 'react';

import './Welcome.css';

const Welcome = ({ client }) => {
	const { name, profilePic, status, username } = client;
	return (
		<div className="Welcome">
			<h1 className="Welcome__name">Welcome, {username}</h1>
			<img src={profilePic} alt={`${name}`} className="Welcome__pic" />
			<p className="Welcome__status">
				<b>Status:</b> {status}
			</p>
			<button type="button" className="Welcome__btn">
				Start a conversation
			</button>
			<p className="Welcome__info">
				Search for someone to start chatting with or go to Contacts to see who
				is available
			</p>
		</div>
	);
};

export default Welcome;
