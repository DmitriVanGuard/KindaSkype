import React from 'react';

const NotificationList = ({ notifications }) => (
	<ul className="NotificationList">
		{notifications &&
			Array.from(notifications.values()).map(notification => (
				<li className="NotificationList__item" key={notification.contactId}>
					{notification.contactId}: {notification.message}
				</li>
			))}
	</ul>
);

export default NotificationList;
