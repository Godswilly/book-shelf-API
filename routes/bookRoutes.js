const express = require('express');
const bookController = require('../controllers/bookController');
const { bookValidationRules, validate } = require('../validator');

const router = express.Router();

router
	.route('/')
	.get(bookController.getAllBooks)
	.post(bookValidationRules(), validate, bookController.createBook);

router
	.route('/:id')
	.get(bookController.getBook)
	.patch(bookController.updateBook)
	.delete(bookController.deleteBook);

module.exports = router;
