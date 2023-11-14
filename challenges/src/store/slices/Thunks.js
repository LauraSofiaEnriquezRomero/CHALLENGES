import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth';
import { authSlice } from '../slices/AuthSlice';

export const loginWithEmailAndPassword = (email, password) => async (dispatch) => {
  try {
    const userCredential = await signInWithEmailAndPassword(authSlice, email, password);
    dispatch(loginSuccess(userCredential.user));
  } catch (error) {
    dispatch(loginFailure(error.message));
  }
};

export const registerWithEmailAndPassword = (email, password) => async (dispatch) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(authSlice, email, password);
    dispatch(loginSuccess(userCredential.user));
  } catch (error) {
    dispatch(loginFailure(error.message));
  }
};

export const loginWithGoogle = () => async (dispatch) => {
  try {
    const provider = new GoogleAuthProvider();
    const userCredential = await signInWithPopup(authSlice, provider);
    dispatch(loginSuccess(userCredential.user));
  } catch (error) {
    dispatch(loginFailure(error.message));
  }
};

export const logout = () => async (dispatch) => {
  try {
    await signOut(authSlice);
    dispatch(logoutSuccess());
  } catch (error) {
    dispatch(logoutFailure(error.message));
  }
};

const loginSuccess = (user) => ({
  type: 'LOGIN_SUCCESS',
  payload: { user },
});

const loginFailure = (error) => ({
  type: 'LOGIN_FAILURE',
  payload: { error },
});

const logoutSuccess = () => ({
  type: 'LOGOUT_SUCCESS',
});

const logoutFailure = (error) => ({
  type: 'LOGOUT_FAILURE',
  payload: { error },
});
