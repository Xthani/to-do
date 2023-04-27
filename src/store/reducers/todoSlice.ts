import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { todoInitial } from '../initialState';
import { ITodo } from '../types';

export const todoSlice = createSlice({
  name: 'todos',
  initialState: todoInitial,
  reducers: {
    addTodo: (state, action: PayloadAction<ITodo>) => {
      state.todos.unshift(action.payload);
    },
    removeTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    editTodo: (state, action: PayloadAction<ITodo>) => {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload.id ? action.payload : todo
      );
    },
    toggleTodoStatus: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload
          ? { ...todo, isCompleted: !todo.isCompleted }
          : todo
      );
    },
  },
});

export const { addTodo, removeTodo, editTodo, toggleTodoStatus } =
  todoSlice.actions;

export default todoSlice.reducer;
