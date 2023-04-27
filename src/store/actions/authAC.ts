import { createAsyncThunk } from '@reduxjs/toolkit';
import { FirebaseError } from 'firebase/app';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';

import { auth } from '../../utils/firebase';
import { TLoginForm } from '../../components/AuthForm/types';
import { setMessage } from '../reducers/messageSlice';

export const fetchSignUp = createAsyncThunk(
  'user/singup',
  async (data: TLoginForm, thunkAPI) => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      return user;
    } catch (e) {
      if (e instanceof FirebaseError) {
        const errorMessage = e.code.split('/')[1].split('-').join(' ');
        thunkAPI.dispatch(setMessage({ content: errorMessage, type: 'error' }));
      }
      thunkAPI.dispatch(
        setMessage({
          content: 'Email is already in use',
          type: 'error',
        })
      );
    }
  }
);

export const fetchSignIn = createAsyncThunk(
  'user/signin',
  async (data: TLoginForm, thunkAPI) => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );

      return user;
    } catch (e) {
      if (e instanceof FirebaseError) {
        const errorMessage = e.code.split('/')[1].split('-').join(' ');
        return thunkAPI.dispatch(
          setMessage({ content: errorMessage, type: 'error' })
        );
      }

      return thunkAPI.dispatch(
        setMessage({
          content: 'Something wend wrong. Try later please',
          type: 'error',
        })
      );
    }
  }
);
