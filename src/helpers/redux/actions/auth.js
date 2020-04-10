import { auth } from './types';
// import AsyncStorage from '@react-native-community/async-storage';
const { SIGN_IN, SIGNIN_FAILURE, SIGN_IN_SUCCESS, RESTORE_TOKEN, SIGN_OUT } = auth;

export const signIn = (token) => {
  return {
    type: SIGN_IN,
    payload: { token }
  }
}

export const signInSuccess = () => {
  return {
    type: SIGN_IN_SUCCESS
  }
}

export const signOut = () => {
  return {
    type: SIGN_OUT
  }
}

export const restoreToken = (token) => {
  return {
    type: RESTORE_TOKEN,
    payload: { token },
  }
}