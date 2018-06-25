import React, { Fragment } from 'react';

import Sidebar from '../components/Sidebar/Sidebar';
import Main from '../components/Main';
import Notification from '../components/Notification/Notification';

const ScreensChat = () => (
	<Fragment>
		<Sidebar />
		<Main />
		<Notification />
	</Fragment>
);

export default ScreensChat;
