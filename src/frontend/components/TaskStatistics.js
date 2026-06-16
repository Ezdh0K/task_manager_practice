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
            <h3>Просмотр</h3>
            <ul className="list">
                <li>Всего: {total}</li>
                <li>Новых: {newCount}</li>
                <li>В процессе: {inProgressCount}</li>
                <li>Выполнено: {completedCount}</li>
            </ul>
            <p>{completedScore}% выполнено</p>
        </div>
    );
}

export default TaskStatistics;