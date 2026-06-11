import React, { useState } from 'react';
function AddTask() {
        const [title, setTitle] = useState('');
        const [description, setDescription] = useState('');
        const [tasks, setTasks] = useState([]);
        const [id, setNextId] = useState(0);
    
    const addTask = () => {
        const newTask = {
        id: id,
        title: title,
        description: description,
        createdAt: new Date()
        };
        setTasks([...tasks, newTask]);
        setTitle('');
        setDescription('');
        setNextId(id + 1);
    };

    return (
    <section>
        <section>
            <div>
            <h2>Добавить задачу</h2>
                <div>
                    <label>Название задачи:</label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Введите название"/>
                </div>
                <div>
                    <label>Описание:</label>
                    <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Описание задачи"/>
                </div>
                <button onClick={addTask}>
                    Добавить задачу
                </button>
            </div>
        </section>
        <section>
            <div style={{ marginTop: '20px' }}>
                <h3>Задачи ({tasks.length}):</h3>
                {tasks.map((task, index) => (
                <div key={task.id} style={{
                    border: '1px solid #ccc',
                    padding: '10px',
                    margin: '5px 0',
                    backgroundColor: '#f9f9f9'
                }}>

                    <p>{task.action}</p>
                    <h4>{task.title}</h4>
                    <p>{task.description}</p>
                    <small>Создано: {task.createdAt.toLocaleString()}</small>
                </div>
                ))}
            </div>
        </section>
    </section>
  );
}

export default AddTask;
