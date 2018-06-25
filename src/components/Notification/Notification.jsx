import React, { Component } from 'react';
import { connect } from 'react-redux';

import NotificationList from './NotificationList';

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
		const { notifications } = this.props;
		return (
			<div className="Notification">
				{isShown && <NotificationList notifications={notifications} />}
				<button type="button" className="Notification__toggle">
					{isShown ? 'Close notifications' : 'Show notifications'}
				</button>
			</div>
		);
	}
}

const mapStateToProps = ({ notifications }) => ({
	notifications
});

export default connect(mapStateToProps)(Notification);
