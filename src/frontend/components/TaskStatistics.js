import React from 'react';

function TaskStatistics({ tasks }) {
    const total = tasks.length;
    const newCount = tasks.filter(task => task.task_status === 'new').length;
    const inProgressCount = tasks.filter(task => task.task_status === 'in_progress').length;
    const completedCount = tasks.filter(task => task.task_status === 'done').length;
    var completedScore = Math.round(completedCount / total * 1000) / 10;
    if (Number.isNaN(completedScore)) {
        completedScore = 0;
    }
    return (
        <div className="statistic">
            <h3>Статистика</h3>
            <ul className="list">
                <li>Всего: <span>{total}</span></li>
                <li>Новых: <span style={{color: '#1976d2'}}>{newCount}</span></li>
                <li>В процессе: <span style={{color: '#f57c00'}}>{inProgressCount}</span></li>
                <li>Выполнено: <span style={{color: '#388e3c'}}>{completedCount}</span></li>
            </ul>
            <label>{completedScore}% выполнено</label>
        </div>
    );
}

export default TaskStatistics;