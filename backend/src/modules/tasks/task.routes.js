import taskController from "./task.controller";

const express = require('express');
const router = express.Router();

router.post('/', taskController.createTask);
router.get('/', taskController.readAllTasks);
router.get('/:id', taskController.readTaskyId);
router.put('/:id', taskController.updateTask);
router.delete('/:id', taskController.deleteTask);

module.exports = router;