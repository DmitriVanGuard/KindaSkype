import React, { Component } from 'react';

import MessagesItem from './MessagesItem';

import './Messages.css';

class Messages extends Component {
	constructor(props) {
		super(props);
		this.msgsRef = React.createRef();
	}

	componentDidMount() {
		this.scrollToBottom();
	}

	componentDidUpdate(prevProps) {
		if (this.props.messages.length !== prevProps.messages.length) {
			this.scrollToBottom();
		}
	}

	scrollToBottom() {
		const msgs = this.msgsRef.current;
		msgs.scrollTo(0, msgs.scrollHeight);
	}

	render() {
		const { messages } = this.props;
		return (
			<div className="Messages" ref={this.msgsRef}>
				{messages.map(message => (
					<MessagesItem message={message} key={message.number} />
				))}
			</div>
		);
	}
}

export default Messages;
