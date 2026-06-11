import React from 'react';
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';
import './style/HomePage.css';

const HomePage = () => {
  return (
    <div className="page">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
};

export default HomePage;
