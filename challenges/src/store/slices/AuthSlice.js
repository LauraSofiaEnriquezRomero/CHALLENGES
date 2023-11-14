import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    error: null,
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.user = action.payload.user;
      state.error = null;
    },
    loginFailure: (state, action) => {
      state.user = null;
      state.error = action.payload.error;
    },
    logoutSuccess: (state) => {
      state.user = null;
      state.error = null;
    },
    logoutFailure: (state, action) => {
      state.error = action.payload.error;
    },
    // Add other cases as needed
  },
});

export const { loginSuccess, loginFailure, logoutSuccess, logoutFailure } = authSlice.actions;

export const logout = () => async (dispatch) => {
  try {
    // Perform logout logic here if needed
    dispatch(logoutSuccess());
  } catch (error) {
    dispatch(logoutFailure(error.message));
  }
};

export const authReducer = authSlice.reducer;


