//Бизнес логика
const taskModel = require('./task.model');

exports.createTask = async (taskData) => {
    if (!taskData.user_id) {
        throw new Error("Войдите в аккаунт!");
    }
    if (!taskData.task_title || !taskData.task_description){
        throw new Error("Поля названия и описания обязательны для заполнения!");
    }
    if (taskData.task_description.length > 500) {
        throw new Error("Можно ввести максимум 500 символов!");
    }
    return taskModel.createTask(taskData);
};

exports.getTasksByUser = async (taskData) => {
    if (!taskData.user_id) {
        throw new Error("User ID не найден");
    }
    return taskModel.getTasksByUser(taskData);
};

exports.getTaskById = async (taskData) => {
    return taskModel.getTaskById(taskData);
};

exports.updateTask = async (taskData) => {
    const { user_id, new_task_title, new_task_description, task_id } = taskData;
    if (!user_id || !task_id) {
        throw new Error("User ID и task ID обязательны!");
    }

    const task = await taskModel.getTaskById({task_id});
    if (!task) {
        throw new Error("Задача не найдена!");
    }

    if (task.user_id !== user_id) {
        throw new Error("У вас нет доступа к этой задаче!");
    }

    if (!new_task_title || !new_task_description) {
        throw new Error("Измените название или описание задачи!");
    }
    if (new_task_description.length > 500) {
        throw new Error("Ввести можно максимум 500 символов!");
    }

    return taskModel.updateTask(taskData);
};

exports.deleteTask = async (taskData) => {
    const { user_id, task_id } = taskData;
    if (!user_id || !task_id) {
        throw new Error("User ID и Task ID обязательны!");
    }

    const task = await taskModel.getTaskById({task_id});
    if (!task) {
        throw new Error("Такая задача не найдена!");
    }
    if (task.user_id !== user_id) {
        throw new Error("У вас нет доступа к этой задаче!");
    }
    
    return taskModel.deleteTask(taskData);
};