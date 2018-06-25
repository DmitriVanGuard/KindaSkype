import React from 'react';

import Input from '../ui/Input';

import './SidebarSearch.css';

const SidebarSearch = ({ value, handleInputChange }) => (
	<div className="SidebarSearch">
		<Input
			placeholder="Search for a new contact..."
			value={value}
			onChange={handleInputChange}
		/>
	</div>
);

export default SidebarSearch;
