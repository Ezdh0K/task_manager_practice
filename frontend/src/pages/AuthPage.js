import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import AuthForm from '../components/AuthForm';

function AuthPage({ onLogin }) {
  return (
    <>
      <Header />
      <AuthForm onLogin={onLogin} />
      <Footer />
    </>
  );
}

export default AuthPage;