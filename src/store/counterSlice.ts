import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '.';

interface ITodo {
  text: string;
  isCompleted: boolean;
  id: string;
}
// Define a type for the slice state
interface CounterState {
  todos: ITodo[];
}

// Define the initial state using that type
const initialState: CounterState = {
  todos: [],
};

export const counterSlice = createSlice({
  name: 'counter',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setTodos: (state, action: PayloadAction<ITodo>) => {
      state.todos.unshift(action.payload);
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((i) => i.id !== action.payload);
    },
    doneTodo: (state, action: PayloadAction<string>) => {
      const doneId = state.todos.findIndex((el) => el.id === action.payload);
      state.todos[doneId].isCompleted = !state.todos[doneId].isCompleted;
    },
    moveTodo: (state, action: PayloadAction<string>) => {
      const moveId = state.todos.findIndex((el) => el.id === action.payload);
    },
  },
});

export const { setTodos, deleteTodo, doneTodo, moveTodo } =
  counterSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.todoReducer.todos;

export default counterSlice.reducer;
