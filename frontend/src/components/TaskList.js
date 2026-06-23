import React from 'react';
import { taskAPI } from '../services/api.js';

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

    const handlePriorityChange = async (task, newPriority) => {
        try {
            await taskAPI.updateTask(
                task.task_id,
                task.task_title,
                task.task_description,
                task.task_status,
                task.category,
                newPriority
            );

            refreshTasks();
        } catch (error) {
            console.error(error);
        }
    };

    const getStatusVariables = (status) => {
        const variables = {
            new: '--status-bg: #e3f2fd; --status-text: #1976d2; --status-border: #bbdefb;',
            in_progress: '--status-bg: #fff3e0; --status-text: #f57c00; --status-border: #ffb74d;',
            done: '--status-bg: #e8f5e8; --status-text: #388e3c; --status-border: #a5d6a7;',
        };
        return variables[status] || '';
    };

    const getPriorityVariables = (priority) => {
        const variables = {
            low: '--priority-bg: #e0f7fa; --priority-text: #006064; --priority-border: #b2ebf2;',
            middle: '--priority-bg: #fff3e0; --priority-text: #f57c00; --priority-border: #ffb74d;',
            high: '--priority-bg: #ffebee; --priority-text: #c62828; --priority-border: #ef9a9a;'
        };
        return variables[priority] || '';
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
                            className='task-action'
                            style={{ cssText: getStatusVariables(task.task_status) }}>
                            <option value="new" className='task-action-new'>Новое</option>
                            <option value="in_progress" className='task-action-in-progress'>В процессе</option>
                            <option value="done" className='task-action-done'>Выполнено</option>
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
                        <div className='pd'>
                            <span className='priority-text'>Приоритет:</span>
                            <select
                                value={task.priority}
                                onChange={(e) => handlePriorityChange(task, e.target.value)}
                                className='task-priority'
                                style={{ cssText: getPriorityVariables(task.priority) }}>
                                <option value="low" className='task-priority-low'>Низкий</option>
                                <option value="middle" className='task-priority-middle'>Средний</option>
                                <option value="high" className='task-priority-high'>Высокий</option>
                            </select>
                            <span className='date'>
                            <span className="priority-text">{task.category}</span>
                            {new Date(task.task_created_at).toLocaleString('ru-RU', {
                                    day: '2-digit',
                                    month: '2-digit',
                                    year: 'numeric',
                                    hour: '2-digit',
                                    minute: '2-digit',
                                })}
                            </span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default TaskList;