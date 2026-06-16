const express = require('express');
const taskController = require('./task.controller.js');

const router = express.Router();

router.post('/', taskController.createTask);
router.get('/', taskController.getAllTasks);
router.get('/:task_id', taskController.getTaskById);
router.put('/:task_id', taskController.updateTask);
router.delete('/:task_id', taskController.deleteTask);

module.exports = router;