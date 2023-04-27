import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import todoReducer from './reducers/todoSlice';
import userReducer from './reducers/userSlice';
import messageReducer from './reducers/messageSlice';

export const store = configureStore({
  reducer: {
    todoReducer,
    userReducer,
    messageReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

type DispatchFunc = () => AppDispatch;
export const useAppDispatch: DispatchFunc = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
