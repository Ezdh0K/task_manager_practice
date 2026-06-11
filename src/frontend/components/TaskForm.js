import React, { useState } from 'react';

function TaskForm({ onAdd }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title.trim()) return;
        
        onAdd({ title, description });
         
        setTitle('');
        setDescription('');
    };

    return (
        <div className='task-form'>
            <h2>Добавить задачу</h2>
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
                <button type="submit" className="add-task">
                    Добавить задачу
                </button>
            </form>
        </div>
    );
}

export default TaskForm;