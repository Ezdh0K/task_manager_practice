const taskService = require('./task.service.js');

exports.createTask = async (req, res, next) => {
    try {
        const { task_title, task_description, task_status, category, priority } = req.body;
        const task = await taskService.createTask({task_title, task_description, task_status, category, priority});

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
        const task = await taskService.getTaskById({task_id});

        res.status(200).json(task);
    } catch (err) {
        next(err);
    }
};

exports.updateTask = async (req, res, next) => {
    try {
        const { new_task_title, new_task_description, new_task_status, new_category, new_priority } = req.body;
        const { task_id } = req.params;
        const task = await taskService.updateTask({task_id, new_task_title, new_task_description, new_task_status, new_category, new_priority});

        res.status(200).json(task);
    } catch (err) {
        next(err);
    }
};

exports.deleteTask = async (req, res, next) => {
    try {
        const { task_id } = req.params;
        await taskService.deleteTask({task_id});

        res.status(200).json({ message: 'Задача успешно удалена' });
    } catch (err) {
        next(err);
    }
};