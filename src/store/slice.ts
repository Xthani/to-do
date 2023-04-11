import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import { ITodo } from './types';

export const slice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<ITodo>) => {
      // Добавляем новую задачу в начало массива todos
      state.todos.unshift(action.payload);
    },
    removeTodo: (state, action: PayloadAction<number>) => {
      // Удаляем задачу с заданным id из массива todos
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    editTodo: (state, action: PayloadAction<ITodo>) => {
      // Изменяем задачу с заданным id в массиве todos
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload.id ? action.payload : todo
      );
    },
    toggleTodoStatus: (state, action: PayloadAction<number>) => {
      // Устанавливаем статус выполнено/невыполнено для задачи с заданным id
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload
          ? { ...todo, isCompleted: !todo.isCompleted }
          : todo
      );
    },
  },
});

export const { addTodo, removeTodo, editTodo, toggleTodoStatus } =
  slice.actions;

export default slice.reducer;
