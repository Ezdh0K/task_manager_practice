import React from 'react';
import { taskAPI } from '../../services/api.js';

function TaskList({ tasks, refreshTasks }) {

const handleDelete = async (id) => {
    try {
        await taskAPI.deleteTask(id);
        refreshTasks();
    } catch (error) {
        console.error(error);
    }
};

const handleStatusChange = async (task, newStatus) => {
    try {
        await taskAPI.updateTask(
            task.task_id,
            task.task_title,
            task.task_description,
            newStatus,
            task.category,
            task.priority
        );

        refreshTasks();
    } catch (error) {
        console.error(error);
    }
};

return (
    <div>
        <h3>Задачи ({tasks.length})</h3>
        {tasks.length === 0 && <p>Список задач пуст.</p>}
        {tasks.map((task) => (
            <div key={task.task_id} className="tasks">
                <div className='tasks-up'>
                    <h4 className="task-title">
                        {task.task_title}
                    </h4>
                    <select
                        value={task.task_status}
                        onChange={(e) => handleStatusChange(task, e.target.value)}
                        className='task-action'>
                        <option value="new">Новое</option>
                        <option value="in_progress">В процессе</option>
                        <option value="done">Выполнено</option>
                    </select>

                    <button onClick={() => handleDelete(task.task_id)} className='delete'>
                        Удалить
                    </button>
                </div>
                <div className="title-description">
                    <p className="description-text">
                        {task.task_description}
                    </p>
                </div>
                <div>
                    <div className='date'>
                        Приоритет: {task.priority}
                    </div>
                </div>
            </div>
        ))}
    </div>
);

}

export default TaskList;