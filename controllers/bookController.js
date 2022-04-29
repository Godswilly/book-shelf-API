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

exports.getAllBooks = async (req, res, next) => {
	try {
		const books = await admin.collection('books');
		const data = await books.get();
		const booksArray = [];
		if (data.empty) {
			res.status(400).send('No book record found');
		} else {
			data.forEach((doc) => {
				const book = new Book(
					doc.id,
					doc.data().title,
					doc.data().author,
					doc.data().categories,
					doc.data().bookCover,
					doc.data().description,
					doc.data().publicationDate
				);
				booksArray.push(book);
			});
			res.send(booksArray);
		}
	} catch (error) {
		res.status(400).send(error.message);
	}
};
