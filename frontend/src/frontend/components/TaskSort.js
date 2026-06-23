import React from 'react';

function TaskSort({ 
  statusFilter, onStatusChange, 
  priorityFilter, onPriorityChange,
  dateSort, onDateSortChange 
}) {
  return (
    <div className="task-sort-container">  
        <div className="sort-group">
            <span className="sort-label">Статус:</span>
            <button className={`sort-btn ${statusFilter === 'all' ? 'active' : ''}`} onClick={() => onStatusChange('all')}>Все</button>
            <button className={`sort-btn ${statusFilter === 'new' ? 'active' : ''}`} onClick={() => onStatusChange('new')}>Новые</button>
            <button className={`sort-btn ${statusFilter === 'in_progress' ? 'active' : ''}`} onClick={() => onStatusChange('in_progress')}>В процессе</button>
            <button className={`sort-btn ${statusFilter === 'done' ? 'active' : ''}`} onClick={() => onStatusChange('done')}>Выполненные</button>
        </div>
        <div className="sort-group">
            <span className="sort-label">Приоритет:</span>
            <button className={`sort-btn ${priorityFilter === 'all' ? 'active' : ''}`} onClick={() => onPriorityChange('all')}>Все</button>
            <button className={`sort-btn ${priorityFilter === 'high' ? 'active' : ''}`} onClick={() => onPriorityChange('high')}>Высокий</button>
            <button className={`sort-btn ${priorityFilter === 'middle' ? 'active' : ''}`} onClick={() => onPriorityChange('middle')}>Средний</button>
            <button className={`sort-btn ${priorityFilter === 'low' ? 'active' : ''}`} onClick={() => onPriorityChange('low')}>Низкий</button>
        </div>
        <div className="sort-group">
            <span className="sort-label">Дата:</span>
            <button className={`sort-btn ${dateSort === 'desc' ? 'active' : ''}`} onClick={() => onDateSortChange('desc')}>Сначала новые</button>
            <button className={`sort-btn ${dateSort === 'asc' ? 'active' : ''}`} onClick={() => onDateSortChange('asc')}>Сначала старые</button>
        </div>
    </div>
  );
}

export default TaskSort;