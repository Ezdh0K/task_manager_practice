const taskService = require('./task.service');

exports.createTask = async (req, res, next) => {
    try {
        const { task_title, task_description } = req.body;
        const task = await taskService(task_title, task_description);

        res.status(201).json(task);
    } catch (err) {
        next(err);
    } 
};

exports.getAllTasks = async (req, res, next) => {
    try {
        const tasks = await taskService.getAllTasks();

        res.status(200).json(tasks);
    } catch (err) {
        next(err);
    }
};

exports.getTaskById = async (req, res, next) => {
    try {
        const { task_id } = req.params;
        const task = await taskService.getTaskById(task_id);

        res.status(200).json(task);
    } catch (err) {
        next(err);
    }
};

exports.updateTask = async (req, res, next) => {
    try {
        const { task_title, task_description, task_status } = req.body;
        const { task_id } = req.params;
        const task = await taskService.updateTask(task_id, task_title, task_description, task_status);

        res.status(200).json(task);
    } catch (err) {
        next(err);
    }
};

exports.deleteTask = async (req, res, next) => {
    try {
        const { task_id } = req.params;
        await taskService.deleteTask(task_id);

        res.status(204).send();
    } catch (err) {
        next(err);
    }
};