import React from 'react';

import './Input.css';

const Input = ({ className, ...rest }) => (
	<input
		type="text"
		placeholder="Write a message..."
		{...rest}
		className={`Input ${className}`}
	/>
);

export default Input;
