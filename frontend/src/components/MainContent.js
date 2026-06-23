import React, { useState, useEffect } from 'react';
import '../style/HomePage.css';
import TaskForm from './TaskForm.js';
import TaskList from './TaskList.js';
import TaskStatistics from './TaskStatistics.js';
import TaskSort from './TaskSort.js';
import UserProfile from './UserProfile.js';
import { taskAPI } from '../services/api.js';


function MainContent({ currentUser, onLogout }) {
const [tasks, setTasks] = useState([]);

const [statusFilter, setStatusFilter] = useState('all');
const [priorityFilter, setPriorityFilter] = useState('all');
const [dateSort, setDateSort] = useState('desc');

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

const getProcessedTasks = (allTasks, status, priority, sort) => {
    let processed = [...allTasks];
    if (status !== 'all') {
      processed = processed.filter(task => task.task_status === status);
    }
    if (priority !== 'all') {
      processed = processed.filter(task => task.priority === priority);
    }
    processed.sort((a, b) => {
      const dateA = new Date(a.task_created_at || a.created_at).getTime();
      const dateB = new Date(b.task_created_at || b.created_at).getTime();
      return sort === 'asc' ? dateA - dateB : dateB - dateA;
    });
    return processed;
};
const displayedTasks = getProcessedTasks(tasks, statusFilter, priorityFilter, dateSort);

return (
    <main className="main-content">
        <section className="left-side">
            <TaskForm onTaskCreated={loadTasks} />
            <TaskStatistics tasks={tasks} />
            <UserProfile user={currentUser} onLogout={onLogout} />
        </section>

        <section className="taskSide">
            <TaskSort 
                statusFilter={statusFilter}
                onStatusChange={setStatusFilter}
                priorityFilter={priorityFilter}
                onPriorityChange={setPriorityFilter}
                dateSort={dateSort}
                onDateSortChange={setDateSort}
                />
            <TaskList tasks={displayedTasks} refreshTasks={loadTasks} />
        </section>
    </main>
);

}

export default MainContent;