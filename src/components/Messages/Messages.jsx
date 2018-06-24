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

	shouldComponentUpdate(nextProps) {
		// eslint-disable-next-line
		return this.props.messages !== nextProps.messages;
	}

	componentDidUpdate(prevProps) {
		// eslint-disable-next-line
		if (this.props.messages.size > prevProps.messages.size) {
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
				{messages
					? Array.from(messages.values()).map(message => (
							<MessagesItem message={message} key={message.number} />
					  ))
					: 'It is a fresh new conversation :)'}
			</div>
		);
	}
}

export default Messages;
