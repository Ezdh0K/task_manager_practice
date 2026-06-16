import React, { useState } from 'react';
import { taskAPI } from '../../services/api.js';

function TaskForm({ onTaskCreated }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [priority, setPriority] = useState('middle');

    const handleSubmit = async (e) => { 
        e.preventDefault(); 
        if (!title.trim()) return; 
        try { 
            await taskAPI.createTask( title, description, 'new', null, priority ); 
            setTitle(''); 
            setDescription(''); 
            setPriority('middle'); 
            onTaskCreated(); 
        } catch (error) { 
            console.error(error); 
        } 
    };

    return (
        <div className='task-form'>
            <h3>Добавить задачу</h3>
            <form onSubmit={handleSubmit}>
                <div className='part-form'>
                    <label>Название задачи:</label><br />
                    <input 
                        type="text" 
                        value={title} 
                        onChange={(e) => setTitle(e.target.value)} 
                        placeholder="Введите название"
                        className='title'
                    />
                </div>
                <div className='part-form'>
                    <label>Описание:</label><br />
                    <textarea 
                        value={description} 
                        onChange={(e) => setDescription(e.target.value)} 
                        placeholder="Описание задачи" 
                        className='description'
                    />
                </div>
                <div className='form-button'>
                    <button type="submit" className="add-task">
                    Добавить задачу
                    </button>
                    <select className='priority' value={priority} onChange={(e) => setPriority(e.target.value)}>
                            <option value="high">Высокий</option> 
                            <option value="middle">Средний</option> 
                            <option value="low">Низкий</option>
                    </select>
                </div>
            </form>
        </div>
    );
}

export default TaskForm;