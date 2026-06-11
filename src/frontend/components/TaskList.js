import React from 'react';

function TaskList({ tasks, onUpdateStatus, onDelete }) {
    return (
        <div>
            <h3>Задачи ({tasks.length}):</h3>    
            {tasks.length === 0 && <p>Список задач пуст.</p>}
            {tasks.map((task) => (
                <div key={task.id} className="tasks">
                    <div className='tasks-up'>
                        <h4 className="task-title">{task.title}</h4>
                        <select value={task.status} onChange={(e) => onUpdateStatus(task.id, e.target.value)} className='task-action'>
                            <option value="новое">Новое</option>
                            <option value="в процессе">В процессе</option>
                            <option value="выполнено">Выполнено</option>
                        </select>
                        <button 
                            onClick={() => onDelete(task.id)}>
                            Удалить
                        </button>
                    </div>
                    <div className="title-description">
                        <p className="description-text">{task.description}</p>
                    </div>
                        
                    <div>
                        <div className='date'>Создано: {new Date(task.createdAt).toLocaleString('ru-RU')}</div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default TaskList;