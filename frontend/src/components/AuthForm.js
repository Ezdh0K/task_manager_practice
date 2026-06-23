import React, { useState } from 'react';
import { authAPI } from '../services/api';
import { useNavigate } from 'react-router-dom';

function AuthPage({ onLogin }) {
  const navigate = useNavigate();
  const [mode, setMode] = useState('register');
  const [errorMsg, setErrorMsg] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errorMsg) setErrorMsg('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email.trim() || !formData.password.trim()) return;
    setErrorMsg('');
    try {
      if (mode === 'register') {
        await authAPI.register(formData.name, formData.email, formData.password);
        setMode('signin');
      } else {
        const data = await authAPI.login(formData.email, formData.password);
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));
        if (onLogin) {
          onLogin(data.user);
        } else {
          console.error("КРИТИЧЕСКАЯ ОШИБКА: Функция onLogin потерялась по дороге к форме!");
        }
        navigate('/');
      }
    } catch (error) {
      setErrorMsg(error.message || 'Что-то пошло не так...');
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-tabs">
          <button
            className={`tab-btn ${mode === 'signin' ? 'active' : ''}`}
            onClick={() => { setMode('signin'); setErrorMsg(''); }}
          >
            ВХОД
          </button>
          <button
            className={`tab-btn ${mode === 'register' ? 'active' : ''}`}
            onClick={() => { setMode('register'); setErrorMsg(''); }}
          >
            РЕГИСТРАЦИЯ
          </button>
        </div>

        <form onSubmit={handleSubmit} className="auth-form">
          
          {errorMsg && (
            <div className="error-message-block" style={{ color: 'red', marginBottom: '15px', textAlign: 'center', fontWeight: 'bold' }}>
              {errorMsg}
            </div>
          )}

          {mode === 'register' && (
            <div className="form-group">
              <label className="form-label">ИМЯ ПОЛЬЗОВАТЕЛЯ</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="form-input"
                required
              />
            </div>
          )}

          <div className="form-group">
            <label className="form-label">ПОЧТА</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">ПАРОЛЬ</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>

          <button type="submit" className="submit-btn">
            {mode === 'register' ? 'Создать аккаунт' : 'Вход'}
          </button>
          <p></p>
          <p className="auth-switch-text">
            {mode === 'register' ? (
              <>
                Вы уже зарегистрированы?{' '}
                <span className="switch-link" onClick={() => { setMode('signin'); setErrorMsg(''); }}>
                  Войдите в учетную запись.
                </span>
              </>
            ) : (
              <>
                Нет аккаунта?{' '}
                <span className="switch-link" onClick={() => { setMode('register'); setErrorMsg(''); }}>
                  Сначала зарегистрируйтесь — подойдут любые учетные данные.
                </span>
              </>
            )}
          </p>
        </form>
      </div>
    </div>
  );
}

export default AuthPage;