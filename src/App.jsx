import React from 'react';
import { Provider } from 'react-redux';

import Sidebar from './components/Sidebar/Sidebar';
import Main from './components/Main';
import ScreensLogin from './screens/Login';

import store from './store';

import './App.css';

const { client } = store.getState();

const App = () => (
	<Provider store={store}>
		{client.username !== '' ? (
			<div className="App">
				<Sidebar />
				<Main />
			</div>
		) : (
			<ScreensLogin />
		)}
	</Provider>
);

export default App;
