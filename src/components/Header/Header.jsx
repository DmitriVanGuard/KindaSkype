import React from 'react';

import './Header.css';

const Header = ({ contact }) => {
	const { name, status } = contact;
	return (
		<header className="Header">
			<h1 className="Header__name">{name}</h1>
			<p className="Header__status">{status}</p>
		</header>
	);
};

export default Header;
