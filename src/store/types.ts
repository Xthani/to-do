export interface ITodo {
  title: string;
  isCompleted: boolean;
  id: number;
}

export interface TodoListState {
  todos: ITodo[];
}
