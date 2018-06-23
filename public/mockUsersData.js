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
	// Array.from({ length: numberOfUsers }, generateUser);
	// const users = new Map();
	const users = {};

	for (let i = 0; i < numberOfUsers; i++) {
		const generatedUser = generateUser();
		users[generatedUser.userId] = generatedUser;
	}

	return users;
};

fs.writeFileSync('users.json', JSON.stringify(generateUsers(10)));
