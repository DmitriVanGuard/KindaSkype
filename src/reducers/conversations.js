import conversations from '../../public/conversations';

const conversationsMap = new Map(
	Object.keys(conversations).map(conversation => [
		conversation,
		conversations[conversation]
	])
);

export default (state = conversationsMap, action) => {
	return state;
};
