//Бизнес логика
const taskModel = require('./task.model');

exports.createTask = async (taskData) => {
    if (!taskData.task_title || !taskData.task_description){
        throw new Error("Поля названия и описания обязательны для заполнения!");
    }
    if (taskData.task_description.length > 500) {
        throw new Error("Можно ввести максимум 500 символов!");
    }
    return taskModel.createTask(taskData);
};

exports.getAllTasks = async () => {
    return taskModel.getAllTasks();
};

exports.getTaskById = async (taskData) => {
    if (!taskData.task_id)
        {
            throw new Error("Такой задачи не существует!");
        }
    return taskModel.getTaskById(taskData);
};

exports.updateTask = async (taskData) => {
    const { new_task_title, new_task_description, task_id } = taskData;
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
    if (!taskData.task_id)
        {
            throw new Error("Такая задача не существует!");
        }
    return taskModel.deleteTask(taskData);
};