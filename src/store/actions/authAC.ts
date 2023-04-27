import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { auth } from '../../utils/firebase';
import { TLoginForm } from '../../components/AuthForm/types';

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
      return thunkAPI.rejectWithValue('Incorrect email address or password');
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
      return thunkAPI.rejectWithValue('Incorrect email address or password');
    }
  }
);
