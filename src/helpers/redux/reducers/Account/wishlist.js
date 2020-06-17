import { wishlist } from '../../actions/types';
// import AsyncStorage from '@react-native-community/async-storage';
const { ADD_WISH, REMOVE_WISH, INITIALIZE_WISHLIST } = wishlist;
export const wishlistReducer = (prevState = [], { type, payload }) => {
  switch(type) {
    case ADD_WISH:
    // AsyncStorage.se
      return [payload.service, ...prevState ]
    case REMOVE_WISH:
      const wishlist = prevState.filter(wish => wish.id !== payload.id)
      return wishlist
    case INITIALIZE_WISHLIST:
      return payload
    default:
      return prevState;
  }
}