import React, { createContext, useContext, useMemo, useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
const AuthContext = createContext();
const AuthDispatchContext = createContext();

const initialState = {
    isLoading: true,
    isSignout: false,
    userToken: null,
  }
const AuthReducer = (prevState, action) => {
    switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          };
      }
}

const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, initialState );

  useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const getUserToken = async () => {
      let userToken;
      try {
        userToken = await AsyncStorage.getItem('userToken');
      } catch (e) {
        // Restoring token failed
      }

      // After restoring token, we may need to validate it in production apps

      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      dispatch({ type: 'RESTORE_TOKEN', token: userToken });
    };

    getUserToken();
  }, []);

  const authContext = useMemo(
    () => ({
      signIn: async data => {
        // In a production app, we need to send some data (usually username, password) to server and get a token
        // We will also need to handle errors if sign in failed
        // After getting token, we need to persist the token using `AsyncStorage`
        // In the example, we'll use a dummy token

        dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
      },
      signOut: () => dispatch({ type: 'SIGN_OUT' }),
      signUp: async data => {
        // In a production app, we need to send user data to server and get a token
        // We will also need to handle errors if sign up failed
        // After getting token, we need to persist the token using `AsyncStorage`
        // In the example, we'll use a dummy token

        dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
      },
    }),
    []
  );

  return (
    <AuthContext.Provider value={state}>
    <AuthDispatchContext.Provider value={authContext}>
      {children}
      </AuthDispatchContext.Provider>
    </AuthContext.Provider>
  );
}

export const useAuthContext = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error(
          'useProfile must be used within a ProfileProvider',
        );
      }
      return context;
}

export const useAuthDispatch = () => {
    const context = useContext(AuthDispatchContext)
    if (context === undefined) {
        throw new Error(
          'useProfile must be used within a ProfileProvider',
        );
      }
      return context;
}

export default AuthContextProvider;