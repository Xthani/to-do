import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { messageInitial } from '../initialState';
import { IMessageState } from '../types';

export const messageSlice = createSlice({
  name: 'message',
  initialState: messageInitial,
  reducers: {
    setMessage: (state, action: PayloadAction<IMessageState>) => {
      state.content = action.payload.content;
      state.type = action.payload.type;
    },
  },
});

export const { setMessage } = messageSlice.actions;

export default messageSlice.reducer;
