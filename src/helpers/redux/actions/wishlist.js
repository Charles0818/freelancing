import { wishlist } from './types';
// import AsyncStorage from '@react-native-community/async-storage';
const { ADD_WISH, REMOVE_WISH, INITIALIZE_WISHLIST } = wishlist;

export const addToWishlist = (service) => {
    return {
        type: ADD_WISH,
        payload: service
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