import HomePage from "./frontend/HomePage";
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import AuthPage from "./frontend/pages/AuthPage";

function App() {
  const [currentUser, setCurrentUser] = useState(() => {
    const savedUser = localStorage.getItem('user');
    try {
      return savedUser ? JSON.parse(savedUser) : null;
    } catch (error) {
      console.error("Ошибка парсинга пользователя из localStorage", error);
      return null;
    }
  });

  const handleLogin = (user) => {
    setCurrentUser(user);
  };

  return (
    <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<HomePage currentUser={currentUser} setCurrentUser={setCurrentUser} />} />
            <Route path="/authentication" element={<AuthPage onLogin={handleLogin} />} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;