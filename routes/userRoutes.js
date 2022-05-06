const express = require('express');
const userController = require('../controllers/userController');
const { userValidationRules, validate } = require('../validator');

const router = express.Router();

router.route('/').get(userController.getAllUsers)
.post(userValidationRules(), validate, userController.createUser);

router
	.route('/:id')
	.get(userController.getUser)
	.patch(userController.updateUser)
	.delete(userController.deleteUser);

module.exports = router;
