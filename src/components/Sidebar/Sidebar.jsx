import React from 'react';

import Contact from '../Contact/Contact';

import './Sidebar.css';

const Sidebar = ({ contacts }) => {
	return (
		<aside className="Sidebar">
			{Array.from(contacts.values()).map(contact => (
				<Contact contact={contact} key={contact.userId} />
			))}
		</aside>
	);
};

export default Sidebar;
