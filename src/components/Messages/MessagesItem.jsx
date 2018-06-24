import React from 'react';

import store from '../../store';
import { deleteMessage, editMessage } from '../../actions/rootActions';

const handleDeleteClick = evt =>
	store.dispatch(
		deleteMessage(
			store.getState().chosenContactId,
			parseInt(evt.currentTarget.parentNode.dataset.number, 10)
		)
	);

const handleMessageClick = evt => {
	const target = evt.currentTarget;
	if (target.parentNode.classList.contains('Messages__item_client')) {
		store.dispatch(
			editMessage(
				parseInt(target.parentNode.dataset.number, 10),
				target.textContent
			)
		);
	}
};

const MessagesItem = ({ message }) => {
	const { text, isClientMsg, number } = message;
	return (
		<div
			className={`Messages__item ${isClientMsg ? 'Messages__item_client' : ''}`}
			data-number={number}
		>
			<span className="Messages__item-delete" onClick={handleDeleteClick}>
				x
			</span>
			<span onClick={handleMessageClick}>{text}</span>
		</div>
	);
};

export default MessagesItem;
