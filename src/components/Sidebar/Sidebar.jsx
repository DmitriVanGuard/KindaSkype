import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Subject } from 'rxjs';

import Contact from '../Contact/Contact';
import SidebarSearch from './SidebarSearch';

import './Sidebar.css';

class Sidebar extends Component {
	state = {
		match: '',
		toMatch: ''
	};

	componentDidMount() {
		this.subscription = this.onContactSearch$
			.debounceTime(500)
			.subscribe(toMatch =>
				this.setState(prevState => Object.assign({}, prevState, { toMatch }))
			);
	}

	componentWillUnmount() {
		if (this.subscription) this.subscription.unsubscribe();
	}

	onContactSearch$ = new Subject();

	handleInputChange = evt => {
		const match = evt.currentTarget.value;
		this.setState(prevState => Object.assign({}, prevState, { match }));
		this.onContactSearch$.next(match);
	};

	render() {
		const { contacts, matchedContacts } = this.props;
		const { match, toMatch } = this.state;
		return (
			<aside className="Sidebar">
				{toMatch}
				<SidebarSearch
					value={match}
					handleInputChange={this.handleInputChange}
				/>
				{Array.from(matchedContacts || contacts.values()).map(contact => (
					<Contact contact={contact} key={contact.userId} />
				))}
			</aside>
		);
	}
}

const mapStateToProps = state => ({
	contacts: state.contacts,
	matchedContacts: state.matchedContacts
});

export default connect(mapStateToProps)(Sidebar);
