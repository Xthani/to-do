import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserCredential } from 'firebase/auth';

import { fetchSignUp, fetchSignIn } from '../actions/authAC';
import { userInitial } from '../initialState';

export interface IUserState {
  error: string | null;
  data: UserCredential | null;
  isLoading: boolean;
}

const authReject = (state: IUserState, action: PayloadAction<string>) => {
  state.isLoading = false;
  state.error = action.payload;
};
const authPending = (state: IUserState) => {
  state.isLoading = true;
};

const authFulfilled = (state: IUserState) => {
  state.isLoading = false;
  state.error = '';
};

export const userSlice = createSlice({
  name: 'user',
  initialState: userInitial,
  reducers: {},
  extraReducers: {
    // Signup
    [fetchSignUp.pending.type]: authPending,
    [fetchSignUp.fulfilled.type]: authFulfilled,
    [fetchSignUp.rejected.type]: authReject,
    // Signin
    [fetchSignIn.pending.type]: authPending,
    [fetchSignIn.fulfilled.type]: authFulfilled,
    [fetchSignIn.rejected.type]: authReject,
  },
});

export default userSlice.reducer;
