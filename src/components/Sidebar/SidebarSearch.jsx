import React from 'react';

// import SidebarSearchResults from './SidebarSearchResults';
// import store from '../../store';

const SidebarSearch = ({ value, handleInputChange }) => (
	// const { matchedContacts } = store.getState();
	<div className="Search">
		<input
			type="text"
			placeholder="Search for a contact..."
			value={value}
			onChange={handleInputChange}
		/>
		{/* {matchedContacts && (
				<SidebarSearchResults matchedContacts={matchedContacts} />
			)} */}
	</div>
);

export default SidebarSearch;
