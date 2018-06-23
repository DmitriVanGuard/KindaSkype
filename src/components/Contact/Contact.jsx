import React from 'react';
import './Contact.css';

const Contact = ({ contact }) => {
	const { name, profilePic, status } = contact;
	return (
		<div className="Contact">
			<img src={profilePic} alt={`${name} pic`} className="Contact__pic" />
			<div className="Contact__details">
				<p className="Contact__details-name">{name}</p>
				<p className="Contact__details-status">{status}</p>
			</div>
		</div>
	);
};

export default Contact;
