import React from 'react';

import store from '../store';
import { loginUser } from '../actions/rootActions';
import Client from '../utils/socket';

import Input from '../components/ui/Input';

import './Login.css';

const handleFormSubmit = evt => {
	evt.preventDefault();
	const username = evt.currentTarget.username.value;
	if (username === '') {
		alert('Please, enter a correct username');
		return;
	}

	Client.emit('login', username)
		.then(() => store.dispatch(loginUser(username)))
		.catch(err => alert(err.data));
};

const ScreensLogin = () => (
	<div className="Login">
		<form className="Login__form" onSubmit={handleFormSubmit}>
			<label htmlFor="username" className="Login__label" />
			<Input
				placeholder="Enter your login..."
				id="username"
				className="Login__input"
			/>
			<button type="submit" className="Login__btn">
				Login!
			</button>
		</form>
		<div className="Login__blur" />
	</div>
);

export default ScreensLogin;
