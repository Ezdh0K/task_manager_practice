import React from 'react';

function TaskStatistics({ tasks }) {
    const total = tasks.length;
    const newCount = tasks.filter(task => task.status === 'новое').length;
    const inProgressCount = tasks.filter(task => task.status === 'в процессе').length;
    const completedCount = tasks.filter(task => task.status === 'выполнено').length;

    return (
        <div className="statistic">
            <h2>Просмотр</h2>
            <ul className="list">
                <li>Всего: {total}</li>
                <li>Новых: {newCount}</li>
                <li>В процессе: {inProgressCount}</li>
                <li>Выполнено: {completedCount}</li>
            </ul>
        </div>
    );
}

export default TaskStatistics;