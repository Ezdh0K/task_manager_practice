import React from 'react';
import './style/HomePage.css';
import AddTasks from './components/AddTask';


const MainContent = () => {
  return (
    <main className="main-content">
        <AddTasks />
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