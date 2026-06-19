const taskService = require('./task.service.js');

exports.createTask = async (req, res, next) => {
    try {
        const user_id = req.user.user_id;
        const { task_title, task_description, task_status, category, priority } = req.body;
        const task = await taskService.createTask({user_id, task_title, task_description, task_status, category, priority});

        res.status(201).json(task);
    } catch (err) {
        next(err);
    } 
};

exports.getTasksByUser = async (req, res, next) => {
    try {
        const user_id = req.user.user_id;
        const tasks = await taskService.getTasksByUser({user_id});

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
        const user_id = req.user.user_id;
        const task = await taskService.updateTask({user_id, task_id, new_task_title, new_task_description, new_task_status, new_category, new_priority});

        res.status(200).json(task);
    } catch (err) {
        next(err);
    }
};

exports.deleteTask = async (req, res, next) => {
    try {
        const user_id = req.user.user_id;
        const { task_id } = req.params;
        await taskService.deleteTask({user_id, task_id});

        res.status(200).json({ message: 'Задача успешно удалена' });
    } catch (err) {
        next(err);
    }
};