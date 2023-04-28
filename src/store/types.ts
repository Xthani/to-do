import { NoticeType } from 'antd/es/message/interface';
export interface ITodo {
  title: string;
  isCompleted: boolean;
  id: number;
}

export interface IUserState {
  error: string | null;
  isLoading: boolean;
}

export interface IMessageState {
  content: React.ReactNode;
  type?: NoticeType;
}

export interface ITodoListState {
  todos: ITodo[];
}
