const admin = require('../db');
const Book = require('../models/bookModel');

exports.createBook = async (req, res, next) => {
	try {
		const data = req.body;
		await admin.collection('books').doc().set(data);
		res.send('Record saved successfully');
	} catch (error) {
		res.status(400).send(error.message);
	}
};
