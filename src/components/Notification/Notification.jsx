import React, { Component } from 'react';
import { connect } from 'react-redux';

import NotificationList from './NotificationList';

import './Notification.css';

class Notification extends Component {
	state = {
		isShown: false
	};

	handleButtonClick = () =>
		this.setState(prevState => ({
			isShown: !prevState.isShown
		}));

	render() {
		const { isShown } = this.state;
		const { notifications, isTyping } = this.props;
		const notificationsAmount = notifications ? notifications.size : 0;
		const notificationStatus = isTyping
			? `[${notificationsAmount}]`
			: `Notifications [${notificationsAmount}]`;
		return (
			<div className="Notification">
				{isShown && <NotificationList notifications={notifications} />}
				<button
					type="button"
					className="Notification__toggle"
					onClick={this.handleButtonClick}
				>
					{isShown ? 'Close notifications' : notificationStatus}
				</button>
			</div>
		);
	}
}

const mapStateToProps = ({ notifications, typing }) => ({
	notifications,
	isTyping: typing.length > 0
});

export default connect(mapStateToProps)(Notification);
