const { body, validationResult } = require('express-validator');
const userValidationRules = () => {
	return [
		body('email')
			.notEmpty()
			.withMessage('Email is required')
			.isEmail()
			.withMessage('Email is invalid'),
		body('password')
			.notEmpty()
			.withMessage('Password is required')
			.withMessage('Password is invalid')
			.isLength({ min: 5 })
			.withMessage('Password is too short'),
		body('name')
			.notEmpty()
			.withMessage('Name is required')
			.withMessage('Name is invalid')
			.isLength({ min: 5 })
			.withMessage('Name is too short')
			.isString(),
	];
};

const bookValidationRules = () => {
	return [
		body('title')
			.notEmpty()
			.withMessage('Title is required')
			.isString()
			.isLength({ min: 3 })
			.withMessage('Title is too short'),
		body('author')
			.notEmpty()
			.withMessage('Author is required')
			.isLength({ min: 3 })
			.withMessage('Author is too short')
			.isString(),
		body('description')
			.notEmpty()
			.withMessage('Description is required')
			.isLength({ min: 5 })
			.withMessage('Description is too short')
			.isString(),
		body('publicationDate')
			.isDate({ format: 'DD-MM-YYYY' })
			.withMessage('Publication date is invalid'),
		body('isArchived').isBoolean(false).withMessage('Archived is invalid'),
		body('bookCover').isString(),
		body('categories')
			.isIn(['comic', 'fantasy', 'action', 'thriller', 'contemporary'])
			.withMessage('Select one from the options'),
	];
};

const validate = (req, res, next) => {
	const errors = validationResult(req);
	if (errors.isEmpty()) {
		return next();
	}
	const extractedErrors = [];
	errors.array().map((err) => extractedErrors.push({ [err.param]: err.msg }));

	return res.status(422).json({
		errors: extractedErrors,
	});
};

module.exports = {
	userValidationRules,
	validate,
	bookValidationRules,
};
