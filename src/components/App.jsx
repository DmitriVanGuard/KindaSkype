import React from 'react';

import Sidebar from './Sidebar/Sidebar';
import Main from './Main';

import store from '../store';

import './App.css';

const App = () => {
	const { contacts, client, chosenContactId } = store.getState();
	return (
		<div className="App">
			<Sidebar contacts={contacts} />
			<Main client={client} chosenContactId={chosenContactId} />
		</div>
	);
};

export default App;
