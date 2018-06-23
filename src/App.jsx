import React from 'react';

import Sidebar from './components/Sidebar';
import Main from './Main';

import './App.css';

const App = () => {
	return (
		<div className="App">
			<Sidebar />
			<Main />
		</div>
	);
};

export default App;
