import React, { useState, useEffect } from 'react';
import './style/HomePage.css';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import TaskStatistics from './components/TaskStatistics';
import { taskAPI } from '../services/api.js';

function MainContent() {
const [tasks, setTasks] = useState([]);

const loadTasks = async () => {
    try {
        const data = await taskAPI.getAllTasks();
        setTasks(Array.isArray(data) ? data : data.tasks || []);
    } catch (error) {
        console.error(error);
    }
};

useEffect(() => {
    loadTasks();
}, []);

return (
    <main className="main-content">
        <section className="left-side">
            <TaskForm onTaskCreated={loadTasks} />
            <TaskStatistics tasks={tasks} />
        </section>

        <section className="taskSide">
            <TaskList tasks={tasks} refreshTasks={loadTasks} />
        </section>
    </main>
);

}

export default MainContent;