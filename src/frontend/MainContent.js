import React, { useState } from 'react';
import './style/HomePage.css';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';


function MainContent() {
  const [tasks, setTasks] = useState([]);
  const [nextId, setNextId] = useState(1);

    const handleAddTask = (taskData) => {
        const newTask = {
            id: nextId,
            title: taskData.title,
            description: taskData.description,
            status: 'Новое',
            createdAt: new Date().toISOString()
        };
        
        setTasks([...tasks, newTask]);
        setNextId(nextId + 1);
    };

    const handleUpdateStatus = (id, newStatus) => {
        setTasks(tasks.map(task => 
            task.id === id ? { ...task, status: newStatus } : task
        ));
    };

  return (
    <main className="main-content">
        <div style={{ maxWidth: '600px', margin: '0 auto', fontFamily: 'Arial, sans-serif', padding: '20px' }}>
            <TaskForm onAdd={handleAddTask} />
            <hr style={{ margin: '30px 0', border: '0', borderTop: '1px solid #eee' }} />
            <TaskList tasks={tasks} onUpdateStatus={handleUpdateStatus} />
        </div>
        <section className="features">
            <h2>Просмотр</h2>
            <ul className="list">
                <li>Всего</li>
                <li>Новых</li>
                <li>В процессе</li>
                <li>Выполнено</li>
            </ul>
        </section>
    </main>
  );
};



export default MainContent;