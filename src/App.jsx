import React from 'react';

import Sidebar from './components/Sidebar/Sidebar';
import Main from './Main';

import store from './store';

import './App.css';

const App = () => {
	const { contacts } = store.getState();
	return (
		<div className="App">
			<Sidebar contacts={contacts} />
			<Main />
		</div>
	);
};

export default App;
