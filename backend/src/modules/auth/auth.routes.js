const express = require('express');
const router = express.Router();
const authController = require('./auth.controller');
const roleMiddleware = require('../../middlewares/role.middleware');

router.post('/registration', authController.registration);
router.post('/login', authController.login);
router.get('/users', roleMiddleware(['admin']), authController.getUsers);

module.exports = router;