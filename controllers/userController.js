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
