import React from 'react';

import User from '../User/User';

import './Sidebar.css';

const Sidebar = ({ contacts }) => {
	return (
		<aside className="Sidebar">
			{Array.from(contacts.values()).map(contact => (
				<User user={contact} key={contact.userId} />
			))}
		</aside>
	);
};

export default Sidebar;
