const express = require('express');
const taskController = require('./task.controller.js');
const authMiddleware = require('../../middlewares/auth.middleware');

const router = express.Router();

router.post('/', authMiddleware, taskController.createTask);
router.get('/', authMiddleware, taskController.getTasksByUser);
router.get('/:task_id', authMiddleware, taskController.getTaskById);
router.put('/:task_id', authMiddleware, taskController.updateTask);
router.delete('/:task_id', authMiddleware, taskController.deleteTask);

module.exports = router;