import React from 'react';

import store from '../store';
import { loginUser } from '../actions/rootActions';

import socket from '../utils/socket';

const handleFormSubmit = evt => {
	evt.preventDefault();
	const username = evt.currentTarget.username.value;
	if (username === '') {
		alert('Please, enter a correct username');
		return;
	}
	socket.emit('login', username);
	store.dispatch(loginUser(username));
};

const ScreensLogin = () => (
	<div>
		<form className="Login" onSubmit={handleFormSubmit}>
			<label htmlFor="username" className="Login__label" />
			<input type="text" id="username" className="Login__input" />
			<button type="submit" className="Login__btn">
				Login!
			</button>
		</form>
	</div>
);

export default ScreensLogin;
