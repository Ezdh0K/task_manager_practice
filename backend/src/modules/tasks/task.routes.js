const taskController = require('./task.controller');
const authMiddleware = require('../../middlewares/auth.middleware');

const express = require('express');
const router = express.Router();

router.post('/', authMiddleware, taskController.createTask);
router.get('/:task_id', authMiddleware, taskController.getTaskById);
router.get('/', authMiddleware, taskController.getTasksByUser);
router.put('/:task_id', authMiddleware, taskController.updateTask);
router.delete('/:task_id', authMiddleware, taskController.deleteTask);

module.exports = router;