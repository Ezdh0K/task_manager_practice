import React from 'react';

function TaskList({ tasks, onUpdateStatus }) {
    return (
        <section>
            <div style={{ marginTop: '30px' }}>
                <h3>Задачи ({tasks.length}):</h3>
                
                {tasks.length === 0 && <p>Список задач пуст.</p>}

                {tasks.map((task) => (
                    <div key={task.id} style={{
                        border: '1px solid #ccc',
                        padding: '15px',
                        margin: '10px 0',
                        backgroundColor: '#f9f9f9',
                        borderRadius: '8px'
                    }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                            <h4 style={{ margin: 0 }}>{task.title}</h4>
                            <select 
                                value={task.status} 
                                onChange={(e) => onUpdateStatus(task.id, e.target.value)}
                                style={{ 
                                    padding: '5px 10px', 
                                    borderRadius: '4px', 
                                    border: '1px solid #999',
                                    cursor: 'pointer'
                                }}
                            >
                                <option value="новое">Новое</option>
                                <option value="в процессе">В процессе</option>
                                <option value="выполнено">Выполнено</option>
                            </select>
                        </div>
                        
                        <p style={{ margin: '0 0 10px 0', color: '#555' }}>{task.description}</p>
                        <small style={{ color: '#888' }}>
                            Статус: <strong>{task.status}</strong> | 
                            Создано: {new Date(task.createdAt).toLocaleString('ru-RU')}
                        </small>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default TaskList;