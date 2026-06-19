import React from 'react';
import Footer from '../Footer';
import Header from '../Header';
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