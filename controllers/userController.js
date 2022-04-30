const admin = require('../db');
const User = require('../models/userModel');

exports.createUser = async (req, res, next) => {
	try {
		const data = req.body;
		await admin.collection('users').doc().set(data);
		res.send('User saved successfully');
	} catch (error) {
		res.status(400).send(error.message);
	}
};

exports.getAllUsers = async (req, res, next) => {
	try {
		const users = await admin.collection('users');
		const data = await users.get();
		const usersArray = [];
		if (data.empty) {
			res.status(400).send('No user record found');
		} else {
			data.forEach((doc) => {
				const user = new User(
					doc.id,
					doc.data().name,
					doc.data().email,
					doc.data().photo,
					doc.data().password,
					doc.data().passwordConfirm
				);
				usersArray.push(user);
			});
			res.send(usersArray);
		}
	} catch (error) {
		res.status(400).send(error.message);
	}
};
