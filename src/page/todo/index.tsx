import React from 'react';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged, signOut } from 'firebase/auth';

import TodoList from '../../components/TodoList';
import { auth } from '../../utils/firebase';
import './todo.scss';
import { Button } from 'antd';

function Todo() {
  const navigate = useNavigate();
  onAuthStateChanged(auth, (user) => {
    if (!user) {
      navigate('/auth');
    }
  });
  const handleLogout = () => signOut(auth);

  return (
    <div className="todo">
      <div className="button-container">
        <Button onClick={handleLogout} type="primary">
          Logout
        </Button>
      </div>
      <TodoList />
    </div>
  );
}

export default Todo;
