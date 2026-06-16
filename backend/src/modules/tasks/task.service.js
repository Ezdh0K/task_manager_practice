//Бизнес логика
const taskModel = require('./task.model.js');

exports.createTask = async (taskData) => {
    const { task_title, task_description, task_status, category, priority } = taskData;
    if (!task_title || !task_description){
        throw new Error("Поля названия и описания обязательны для заполнения!");
    }
    if (task_description.length > 500) {
        throw new Error("Можно ввести максимум 500 символов!");
    }
    return taskModel.createTask({task_title, task_description, task_status, category, priority});
};

exports.getAllTasks = async () => {
    return taskModel.getAllTasks();
};

exports.getTaskById = async (taskData) => {
    const { task_id } = taskData;
    if (!task_id)
        {
            throw new Error("Такой задачи не существует!");
        }
    return taskModel.getTaskById(taskData);
};

exports.updateTask = async (taskData) => {
    const { new_task_title, new_task_description, new_task_status, new_category, new_priority, task_id } = taskData;
    if (!new_task_title || !new_task_description) {
        throw new Error("Измените название или описание задачи");
    }
    if (new_task_description.length > 500) {
        throw new Error("Ввести можно максимум 500 символов!");
    }
    if (!task_id){
        throw new Error("Такой задачи не существует!");
    }
    return taskModel.putTask(taskData);
};

exports.deleteTask = async (taskData) => {
    const { task_id } = taskData;
    if (!task_id)
        {
            throw new Error("Такая задача не существует!");
        }
    return taskModel.deleteTask(taskData);
};