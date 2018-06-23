import React from 'react';

import store from '../../store';
import { deleteMessage } from '../../actions';

const handleDeleteClick = evt => {
	store.dispatch(
		deleteMessage(
			store.getState().chosenContactId,
			parseInt(evt.currentTarget.dataset.number, 10)
		)
	);
};

const MessagesItem = ({ message }) => {
	const { text, isClientMsg, number } = message;
	return (
		<span
			className={`Messages__item ${isClientMsg ? 'Messages__item_client' : ''}`}
		>
			<span
				className="Messages__item-delete"
				data-number={number}
				onClick={handleDeleteClick}
			>
				x
			</span>
			{text}
		</span>
	);
};

export default MessagesItem;
