import { wishlist } from './types';
// import AsyncStorage from '@react-native-community/async-storage';
const { ADD_WISH, ADD_WISH_REQUESTED,  REMOVE_WISH, REMOVE_WISH_REQUESTED, INITIALIZE_WISHLIST } = wishlist;

export const addToWishlist = (service) => {
  return {
    type: ADD_WISH,
    payload: { service }
  }
}

export const addToWishlistRequest = (service) => {
  return {
    type: ADD_WISH_REQUESTED,
    payload: { service }
  }
}

export const initializeWishlist = (wishlist) => {
  return {
    type: INITIALIZE_WISHLIST,
    payload: wishlist,
  }
}

export const removeFromWishlist = (id) => {
  return {
    type: REMOVE_WISH,
    payload: { id: parseInt(id, 10) },
  }
}

export const removeFromWishlistRequest = (service) => {
  return {
    type: REMOVE_WISH_REQUESTED,
    payload: {service },
  }
}
