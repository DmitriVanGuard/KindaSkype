import React from 'react';

const MessagesItem = ({ message }) => {
	const { text, isClientMsg } = message;
	return (
		<span
			className={`Messages__item ${isClientMsg ? 'Messages__item_client' : ''}`}
		>
			<span className="Messages__item-delete">x</span>
			{text}
		</span>
	);
};

export default MessagesItem;
