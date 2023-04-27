import { UserCredential } from 'firebase/auth';
export interface ITodo {
  title: string;
  isCompleted: boolean;
  id: number;
}

export interface IUserState {
  error: string | null;
  data: UserCredential | null;
  isLoading: boolean;
}

export interface TodoListState {
  todos: ITodo[];
  user: IUserState;
}
