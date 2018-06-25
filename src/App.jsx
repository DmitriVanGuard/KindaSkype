import React from 'react';
import { Provider } from 'react-redux';

import ScreensLogin from './screens/Login';
import ScreensChat from './screens/Chat';

import store from './store';

import './App.css';

const App = () => (
	<Provider store={store}>
		<div className="App">
			{store.getState().client.username !== '' ? (
				<ScreensChat />
			) : (
				<ScreensLogin />
			)}
		</div>
	</Provider>
);

export default App;
