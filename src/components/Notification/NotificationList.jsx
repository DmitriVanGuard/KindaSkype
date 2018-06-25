import React from 'react';

import { setChosenContactId } from '../../actions/rootActions';
import store from '../../store';

const NotificationList = ({ notifications }) => (
	<ul className="NotificationList">
		{notifications &&
			Array.from(notifications.values()).map(notification => (
				<li className="NotificationList__item" key={notification.contactId}>
					<a
						onClick={e => {
							e.preventDefault();
							store.dispatch(setChosenContactId(notification.contactId));
						}}
					>
						{notification.name}: {notification.message}
					</a>
				</li>
			))}
	</ul>
);

export default NotificationList;
