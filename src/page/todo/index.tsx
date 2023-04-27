import React from 'react';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';

import TodoList from '../../components/TodoList';
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
