import React, { useState } from 'react';
import { taskAPI } from '../services/api.js';

function TaskForm({ onTaskCreated }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [priority, setPriority] = useState('auto');
    const [error, setError] = useState('');
    const [category, setCategory] = useState('');

    const handleSubmit = async (e) => { 
        e.preventDefault(); 
        if (!title.trim()) return; 
        setError('');
        try { 
            await taskAPI.createTask( title, description, 'new', category, priority ); 
            setTitle(''); 
            setDescription(''); 
            setPriority('auto'); 
            setCategory(''); 
            onTaskCreated(); 
        } catch (error) { 
            console.error(error); 
            setError(error.message || 'Не удалось создать задачу. Проверьте авторизацию.');
        } 
    };

    const getPriorityVariables = (priority) => {
    const variables = {
            auto: '--priority-bg: #e8eaf6; --priority-text: #3f51b5; --priority-border: #c5cae9;',
            low: '--priority-bg: #e0f7fa; --priority-text: #006064; --priority-border: #b2ebf2;',
            middle: '--priority-bg: #fff3e0; --priority-text: #f57c00; --priority-border: #ffb74d;',
            high: '--priority-bg: #ffebee; --priority-text: #c62828; --priority-border: #ef9a9a;'
        };
        return variables[priority] || '';
    };

    return (
        <div className='task-form'>
            <h3>Добавить задачу</h3>

            {error && (
                <div style={{
                    color: '#c62828',
                    backgroundColor: '#ffebee',
                    padding: '10px 14px',
                    border: '1px solid #ef9a9a',
                    borderRadius: '4px',
                    marginBottom: '15px',
                    fontSize: '14px',
                    fontWeight: '500'
                }}>
                    {error}
                </div>
            )}
            
            <form onSubmit={handleSubmit}>
                <div className='part-form'>
                    <label>Название задачи:</label><br />
                    <input 
                        type="text" 
                        value={title} 
                        onChange={(e) => setTitle(e.target.value)} 
                        placeholder="Введите название"
                        className='title'
                        maxLength={255}
                    />
                </div>

                <div className="part-form">
                    <label>Категория:</label><br />
                    <input 
                    type="text" 
                    className='category'
                    placeholder="Категория" 
                    value={category} 
                    onChange={(e) => setCategory(e.target.value)}
                    maxLength={50}
                    />
                </div>
                <div className='part-form'>
                    <label>Описание:</label><br />
                    <textarea 
                        value={description} 
                        onChange={(e) => setDescription(e.target.value)} 
                        placeholder="Описание задачи" 
                        className='description'
                        maxLength={500}
                    />
                    <span className='count-symbol'>{description.length}/500</span>
                </div>
                <div className='form-button'>
                    <button type="submit" className="add-task">
                    Добавить задачу
                    </button>
                    <select className='task-priority' value={priority} onChange={(e) => setPriority(e.target.value)} style={{ cssText: getPriorityVariables(priority) }}>
                            <option value="auto" className='task-priority-auto'>Авто</option>
                            <option value="low" className='task-priority-low'>Низкий</option>
                            <option value="middle" className='task-priority-middle'>Средний</option>
                            <option value="high" className='task-priority-high'>Высокий</option>
                    </select>
                </div>
            </form>
        </div>
    );
}

export default TaskForm;