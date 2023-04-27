import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { message } from 'antd';
import { onAuthStateChanged } from 'firebase/auth';

import AuthForm from '../../components/AuthForm';
import { auth } from '../../utils/firebase';
import { useAppDispatch, useAppSelector } from '../../store';
import { messageStateSelector } from '../../store/selectors';
import { setMessage } from '../../store/reducers/messageSlice';
import { messageInitial } from '../../store/initialState';
import './Auth.scss';

function Auth() {
  const [messageApi, contextHolder] = message.useMessage();
  const messageState = useAppSelector(messageStateSelector);
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  onAuthStateChanged(auth, (user) => {
    if (user) {
      navigate('/');
    }
  });

  useEffect(() => {
    if (messageState.content) {
      messageApi.open(messageState);
      dispatch(setMessage(messageInitial));
    }
  }, [messageState, messageApi, dispatch]);

  return (
    <div className="auth">
      {contextHolder}
      <AuthForm />
    </div>
  );
}

export default Auth;
