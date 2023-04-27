import { NoticeType } from 'antd/es/message/interface';
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

export interface IMessageState {
  content: React.ReactNode;
  type?: NoticeType;
}

export interface ITodoListState {
  todos: ITodo[];
}
