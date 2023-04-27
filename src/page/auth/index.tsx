import React from 'react';

import AuthForm from '../../components/AuthForm';
import './Auth.scss';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../utils/firebase';
import { useNavigate } from 'react-router-dom';

function Auth() {
  const navigate = useNavigate();

  onAuthStateChanged(auth, (user) => {
    if (user) {
      navigate('/');
    }
  });

  return (
    <div className="auth">
      <AuthForm />
    </div>
  );
}

export default Auth;
