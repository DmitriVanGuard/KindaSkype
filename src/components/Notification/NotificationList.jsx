import React from 'react';

import { clickNotification } from '../../actions/rootActions';
import store from '../../store';

import './NotificationList.css';

const NotificationList = ({ notifications }) => (
	<ul className="NotificationList">
		{notifications &&
			Array.from(notifications.values()).map(notification => (
				<li className="NotificationList__item" key={notification.contactId}>
					<a
						onClick={e => {
							e.preventDefault();
							store.dispatch(clickNotification(notification));
						}}
					>
						<span className="NotificationList__item-author">
							{notification.name}
						</span>
						<span>{notification.message}</span>
					</a>
				</li>
			))}
	</ul>
);

export default NotificationList;
