import React, { useState } from 'react';
import './style/HomePage.css';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import TaskStatistics from './components/TaskStatistics';

function MainContent() {
    const [tasks, setTasks] = useState([]);
    const [nextId, setNextId] = useState(1);

    const handleAddTask = (taskData) => {
        const newTask = {
            id: nextId,
            title: taskData.title,
            description: taskData.description,
            status: 'новое',
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

    const handleDeleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };


    return (
    <main className="main-content">
        <section className='left-side'>
          <TaskForm onAdd={handleAddTask} />
          <TaskStatistics tasks={tasks}/>
        </section>
        <section className='taskSide'>
          <TaskList tasks={tasks} onUpdateStatus={handleUpdateStatus} onDelete={handleDeleteTask}/>
        </section>
    </main>
    );
};

export default MainContent;