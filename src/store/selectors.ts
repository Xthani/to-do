import { RootState } from '.';

// todo
const todosSelector = (state: RootState) => state.todoReducer.todos;

// user
const isAuthLoadingSelector = (state: RootState) => state.userReducer.isLoading;
const messageStateSelector = (state: RootState) => state.messageReducer;

export { isAuthLoadingSelector, todosSelector, messageStateSelector };
