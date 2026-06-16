const userController = require('./user.controller');

const express = require('express');
const router = express.Router();

router.post('/', userController.createUser);
router.get('/', userController.getUserByEmail);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;