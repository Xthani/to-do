import { IUserState, ITodoListState, IMessageState } from './types';

const userInitial: IUserState = {
  isLoading: false,
  data: null,
  error: null,
};

const messageInitial: IMessageState = {
  content: null,
  type: 'info',
};

const todoInitial: ITodoListState = {
  todos: [],
};

export { userInitial, messageInitial, todoInitial };
