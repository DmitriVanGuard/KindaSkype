import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Subject } from 'rxjs';

import Contacts from '../Contact/Contacts';
import SidebarSearch from './SidebarSearch';

import store from '../../store';
import {
	searchContact,
	resetContactSearch
} from '../../epics/searchContactEpic';

import './Sidebar.css';

class Sidebar extends Component {
	state = {
		match: ''
	};

	componentDidMount() {
		this.subscription = this.onContactSearch$
			.debounceTime(700)
			.subscribe(username => {
				console.log(username);
				store.dispatch(
					username !== '' ? searchContact(username) : resetContactSearch()
				);
			});
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
		const { match } = this.state;
		return (
			<aside className="Sidebar">
				<SidebarSearch
					value={match}
					handleInputChange={this.handleInputChange}
				/>
				<Contacts contacts={contacts} matchedContacts={matchedContacts} />
			</aside>
		);
	}
}

const mapStateToProps = state => ({
	contacts: state.contacts,
	matchedContacts: state.matchedContacts
});

export default connect(mapStateToProps)(Sidebar);
