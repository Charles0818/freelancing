import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { wishlist } from '../actions/types';
import { wishlistActions } from '../actions';
const { ADD_WISH, ADD_WISH_REQUESTED, REMOVE_WISH, REMOVE_WISH_REQUESTED, INITIALIZE_WISHLIST } = wishlist;
const { addToWishlist, removeFromWishlist } = wishlistActions;
import { sendData, getData, deleteData, apiKey } from './ajax';

// ALl httpRequest functions
const wishlistDBCalls = {
  addWish: async (data) => {
    const response = await sendData(`${apiKey}`, data, token);
    return response
  },
  removeWish: async (id) => {
      const response = await deleteData(`${apiKey}/id=${id}`, token);
      return response
  },
  getWishlist: async (data) => {
    const response = await getData(`${apiKey}`, token);
    return response
    
  }
}

// All generators*
function* addWish(action) {
  try {
    yield put(addToWishlist(action.service))
    const wish = yield call(wishlistDBCalls.addWish, action.service)
  } catch (err) {
    yield put(removeFromWishlist(action.service.id))
  }
}

function* removeWish(action) {
  try {
    yield put(removeFromWishlist(action.service.id))
    const wish = yield call(wishlistDBCalls.removeWish, action.service.id)
  } catch (err) {
    yield put(addToWishlist(action.service))
  }
}

export function* addWishRequest() {
  yield takeLatest(ADD_WISH_REQUESTED, addWish)
}

export function* addWishRequest() {
  yield takeLatest(REMOVE_WISH_REQUESTED, removeWish)
}