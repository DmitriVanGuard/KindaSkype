import React from 'react';

const ScreensLogin = () => (
	<div>
		<form className="Login">
			<label htmlFor="username" className="Login__label" />
			<input type="text" id="username" className="Login__input" />
			<button type="submit" className="Login__btn">
				Login!
			</button>
		</form>
	</div>
);

export default ScreensLogin;
