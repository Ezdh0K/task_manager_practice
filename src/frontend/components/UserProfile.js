import React from 'react';
import { Link } from 'react-router-dom';

function UserProfile({ user, onLogout }) {
  
  if (!user) {
    return (
      <div className="user-title">
        <h4>Мой профиль</h4>
        <p>Вы вошли как гость. Пожалуйста, авторизуйтесь для управления задачами.</p>
        <Link to="/authentication">
          <button className="auth-button">Авторизоваться</button>
        </Link>
      </div>
    );
  }

  
  return (
    <div className="user-profile" >
      <h4>Профиль пользователя</h4>
      <div className="user-info">
        <p><strong>Имя:</strong> {user.user_name || user.name || 'Не указано'}</p>
        <p><strong>Email:</strong> {user.user_email || user.email}</p>
        <p><strong>Роль:</strong> {user.role === 'admin' ? 'Администратор' : 'Пользователь'}</p>
      </div>
      
      {onLogout && (
        <button onClick={onLogout}>
          <Link to="/authentication" className="Auth" onClick={onLogout}>
            Выход
          </Link>
        </button>
      )}
    </div>
  );
}

export default UserProfile;