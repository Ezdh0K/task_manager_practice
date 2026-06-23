import React from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import './style/HomePage.css';

const HomePage = ({ currentUser, setCurrentUser }) => {
  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setCurrentUser(null);
  };
  return (
    <>
      <Header />
      <MainContent currentUser={currentUser} onLogout={handleLogout}/>
      <Footer />
    </>
  );
};

export default HomePage;
