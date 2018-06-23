import React from 'react';

import MessagesItem from './MessagesItem';

import './Messages.css';

const Messages = ({ messages }) => {
	return (
		<div className="Messages">
			{Array.from(messages.values()).map(message => (
				<MessagesItem message={message} key={message.number} />
			))}
		</div>
	);
};

export default Messages;
