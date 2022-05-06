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
					doc.data().password
				);
				usersArray.push(user);
			});

			res.status(200).json({
				status: 'success',
				data: usersArray,
			});
		}
	} catch (error) {
		res.status(404).json({
			status: 'fail',
			message: error,
		});
	}
};

exports.getUser = async (req, res, next) => {
	try {
		const id = req.params.id;
		const user = await admin.collection('users').doc(id);
		const data = await user.get();
		if (!data.exists) {
			res.status(400).send('User with the given ID not found');
		} else {
			res.status(200).send({ data: data.data() });
		}
	} catch (error) {
		res.status(404).json({
			status: 'fail',
			message: error,
		});
	}
};

exports.updateUser = async (req, res, next) => {
	try {
		const id = req.params.id;
		const data = req.body;
		const user = await admin.collection('users').doc(id);
		await user.update(data);

		res.status(200).json({
			status: 'success',
			data: data,
		});
	} catch (error) {
		res.status(404).json({
			status: 'fail',
			message: error,
		});
	}
};

exports.deleteUser = async (req, res, next) => {
	try {
		const id = req.params.id;
		await admin.collection('users').doc(id).delete();

		res.status(204).json({
			status: 'success',
			data: null,
		});
	} catch (error) {
		res.status(404).json({
			status: 'fail',
			message: error,
		});
	}
};
