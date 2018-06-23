const faker = require('faker');
const txtgen = require('txtgen');
const fs = require('fs');

let currentId = 0;

const generateUser = () => ({
	name: faker.name.findName(),
	email: faker.internet.email(),
	profilePic: faker.internet.avatar(),
	status: txtgen.sentence(),
	userId: currentId++
});

const generateUsers = numberOfUsers => {
	const users = [];

	for (let i = 0; i < numberOfUsers; i++) {
		const generatedUser = generateUser();
		users.push(generatedUser);
	}

	return users;
};

const generateMsg = number => ({
	number,
	text: txtgen.sentence(),
	isClientMsg: faker.random.boolean()
});

const generateMsgs = numberOfMsgs => {
	// Array.from({ length: numberOfMsgs }, generateUser);
	// const users = new Map();
	const msg = [];

	for (let i = 0; i < numberOfMsgs; i++) {
		const generatedMsg = generateMsg(i);
		msg.push(generatedMsg);
	}

	return msg;
};

const generateConversations = contacts =>
	contacts.map(contact => ({
		[contact.userId]: generateMsgs(10)
	}));

const client = generateUser();
const contacts = generateUsers(10);
const conversations = generateConversations(contacts);

fs.writeFileSync('./public/client.json', JSON.stringify(client));
fs.writeFileSync('./public/contacts.json', JSON.stringify(contacts));
fs.writeFileSync('./public/conversations.json', JSON.stringify(conversations));
