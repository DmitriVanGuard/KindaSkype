import React, { Component } from 'react';

export class Notification extends Component {
	state = {
		isShown: false
	};

	handleButtonClick = () =>
		this.setState(prevState => ({
			isShown: !prevState.isShown
		}));

	render() {
		const { isShown } = this.state;
		return (
			<div className="Notification">
				<button type="button" className="Notification__toggle">
					{isShown ? 'Close notifications' : 'Show notifications'}
				</button>
			</div>
		);
	}
}

export default Notification;
