import React from 'react';
import { Provider } from 'react-redux';

import Sidebar from './Sidebar/Sidebar';
import Main from './Main';

import store from '../store';

import './App.css';

const App = () => (
		<Provider store={store}>
			<div className="App">
				<Sidebar />
				<Main />
			</div>
		</Provider>
	);

export default App;
