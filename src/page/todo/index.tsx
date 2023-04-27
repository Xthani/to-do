import React from 'react';

import TodoList from '../../components/TodoList';
import { useNavigate } from 'react-router-dom';

import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../utils/firebase';

function Todo() {
  const navigate = useNavigate();
  onAuthStateChanged(auth, (user) => {
    if (!user) {
      navigate('/auth');
    }
  });
  return <TodoList />;
}

export default Todo;
