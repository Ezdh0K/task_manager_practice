import React from 'react';
import '../style/HomePage.css';
import { exportAPI } from '../../services/api.js';

const handleExport = async () => {
    try {
        await exportAPI.exportTasks();
        alert('Файл успешно скачан!');
    } catch (error) {
        alert('Ошибка при экспорте: ' + error.message);
    }
};

const Header = () => {
  return (
    <header className="App-header">
        <div className="Name">
          <h1>
            Task Manager
          </h1>
          <button onClick={handleExport}>Экспортировать задачи</button>
        </div>
    </header>
  );
};

export default Header;