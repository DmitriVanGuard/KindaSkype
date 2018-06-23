import React from 'react';

const MessagesItem = ({ message }) => {
	const { text, isClientMsg } = message;
	return (
		<span
			className={`Messages__item ${isClientMsg ? 'Messages__item_client' : ''}`}
		>
			{text}
		</span>
	);
};

export default MessagesItem;
