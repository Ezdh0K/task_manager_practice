import React from 'react';
import Footer from '../Footer';
import Header from '../Header';
import AuthForm from '../components/AuthForm';

function AuthPage() {
  return (
    <>
      <Header />
      <AuthForm />
      <Footer />
    </>
  );
}

export default AuthPage;