import React, { createContext, useReducer, useContext } from 'react';
import { profile } from './actions';
export const ProfileContext = createContext();
export const ProfileDispatchContext = createContext();
export const ProfileContextConsumer = ProfileContext.Consumer;

const { wishlist } = profile;
const initialState = {
  isLoggedIn: false,
  token: null,
  profileDetails: {
    firstName: '', lastName: '',
    contactInfo: {
      phone: '',
      city: '',
      state: '',
      country: '',
      zipcode: '',
    }
  },
  wishlist: [],
}
export const ProfileReducer = (state, action) => {
    const { type, payload } = action;
  switch (type) {
    case 'LOGIN': {
        const { token, profileDetails, wishlist } = action;
        saveToken(token);
        return { ...state, isLoggedIn: true, token, profileDetails, wishlist, }
    }
    case 'LOGOUT': {
      removeToken();
      action.push('/account/login');
      return { ...initialState }
    }
    case 'UPDATE_SETTINGS': {
     return { ...state, settings: action.settings }
    }
    case 'UPDATE_NAME': {
      state.profileDetails.firstName = action.firstName;
      state.profileDetails.lastName = action.lastName
      return { ...state, ...state.profileDetails }
    }
    case 'UPDATE_ADDRESS': {
      state.profileDetails.contactInfo = action.contactInfo
      return { ...state }
    }
    case 'SET_WISHLIST': {
      return { ...state, wishlist: action.wishlist }
    }
    case wishlist.remove: {
      const wishlist = state.wishlist.filter(wish => wish.id !== action.id);
      return {...state, wishlist};
    }
    case 'ADD_TO_WISHLIST': {
      const wishlist = [action.product, ...state.wishlist];
      return { ...state, wishlist }
    }
    case wishlist.toggle: {
        const { wish } = payload;
        const wishlist = [];
        const inWishlist = state.wishlist.find(wish => wish.id === wish.id);
        if(inWishlist) {
            wishlist = state.wishlist.filter(wish => wish.id !== wish.id);
        } else {
            wishlist = [wish, ...state.wishlist]
        };
        return { ...state, wishlist }
    }
    case 'SET_WISHLIST': {
      return { ...state, wishlist: action.wishlist }
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type} `);
    }
  }
};

export const saveToken = (token) => {
  localStorage.setItem('Token', JSON.stringify(token))
}

export const getToken = () => {
  return localStorage.getItem("Token") ? (
    JSON.parse(localStorage.getItem("Token"))) : false
};

export const removeToken = () => {
  localStorage.removeItem('Token');
}


export const ProfileProvider = props => {
  const [profile, dispatch] = useReducer(ProfileReducer, initialState);
  console.log(profile);

  return (
    <ProfileContext.Provider value={{ profile }}>
      <ProfileDispatchContext.Provider value={{ dispatch }}>
        {props.children}
      </ProfileDispatchContext.Provider>
    </ProfileContext.Provider>
  );
};

export const useProfileContext = () => {
  const context = useContext(ProfileContext);
  if (context === undefined) {
    throw new Error(
      'useProfile must be used within a ProfileProvider',
    );
  }
  return context;
};

export const useProfileDispatch = () => {
  const context = useContext(ProfileDispatchContext);
  if (context === undefined) {
    throw new Error(
      'useProfileDispatch must be used within a ProfileProvider',
    );
  }
  return context;
};


export const IsAuth = () => {
 const { profile: { isLoggedIn, token } } = useProfileContext();
 return isLoggedIn  && token
}

export const CheckIfWishListed = (productId) => {
  const { profile: { wishlist } } = useProfileContext();
  const isWishListed = wishlist.find(wish => wish.id === productId);
  return isWishListed;
}

export const VerifyAddress = () => {
  const { profile: { profileDetails: { contactInfo } } } = useProfileContext();
  const { phone, address, city, state, country, zipcode } = contactInfo;
  const isValid = [ phone, address, city, state, country, zipcode ].every(el => el.length !== 0)
  return isValid;
}