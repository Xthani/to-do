import { IUserState, TodoListState } from './types';

const userInitial: IUserState = {
  isLoading: false,
  data: null,
  error: null,
};

export const initialState: TodoListState = {
  todos: [],
  user: userInitial,
};
