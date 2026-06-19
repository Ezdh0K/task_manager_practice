import React from 'react';
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';
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
