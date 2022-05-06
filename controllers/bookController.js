const admin = require('../db');
const Book = require('../models/bookModel');

exports.createBook = async (req, res, next) => {
	try {
		const book = req.body;
		await admin.collection('books').doc().set(book);

		res.status(200).json({
			status: 'success',
			data:	book,
		});
	} catch (error) {
		res.status(404).json({
			status: 'fail',
			message: error,
		});
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
					doc.data().publicationDate,
					doc.data().isArchived
				);
				booksArray.push(book);
			});

			res.status(200).json({
				status: 'success',
					data: booksArray,
			});
		}
	} catch (error) {
		res.status(404).json({
			status: 'fail',
			message: error,
		});
	}
};

exports.getBook = async (req, res, next) => {
	try {
		const id = req.params.id;
		const book = await admin.collection('books').doc(id);
		const data = await book.get();
		if (!data.exists) {
			res.status(400).send('Book with the given ID not found');
		} else {
			res.status(200).send({data:data.data()});
		}
	} catch (error) {
		res.status(404).json({
			status: 'fail',
			message: error,
		});
	}
};

exports.updateBook = async (req, res, next) => {
	try {
		const id = req.params.id;
		const bookData = req.body;
		const book = await admin.collection('books').doc(id);
		await book.update(bookData);
		
		res.status(200).json({
			status: 'success',
				data: bookData,
		});
	} catch (error) {
		res.status(404).json({
			status: 'fail',
			message: error,
		});
	}
};

exports.deleteBook = async (req, res, next) => {
	try {
		const id = req.params.id;
		await admin.collection('books').doc(id).delete();

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
