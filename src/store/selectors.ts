import { RootState } from '.';

// todo
const todosSelector = (state: RootState) => state.todoReducer.todos;

// user
const isAuthLoadingSelector = (state: RootState) => state.userReducer.isLoading;

export { isAuthLoadingSelector, todosSelector };
