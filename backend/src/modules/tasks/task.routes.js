import taskController from "./task.controller";

const express = require('express');
const router = express.Router();

router.post('/', taskController.createTask);
router.get('/', taskController.readAllTasks);
router.get('/:id', taskController.readTaskById);
router.put('/:id', taskController.putTask);
router.delete('/:id', taskController.deleteTask);

module.exports = router;