import { call, put, takeEvery, takeLatest, spawn } from 'redux-saga/effects';
import { wishlist } from '../actions/types';
import { wishlistActions } from '../actions';
const { ADD_WISH, ADD_WISH_REQUESTED, REMOVE_WISH, REMOVE_WISH_REQUESTED, INITIALIZE_WISHLIST } = wishlist;
const { addToWishlist, removeFromWishlist } = wishlistActions;
import { sendData, getData, deleteData, apiKey } from './ajax';

const token = '574989897A948hfhvj'
// ALl httpRequest functions
const wishlistDBCalls = {

  addWish: async (data) => {
    // const response = await sendData(`${apiKey}/hello`, data, token);
    return true
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
function* addWish({ payload: { service } }) {
  
  try {
    console.log('saga action', service);
    
    yield call(wishlistDBCalls.addWish, service);
    yield put(addToWishlist(service))
  } catch (err) {
    yield put(removeFromWishlist(service.id));
    console.log('error found', err);
  }
}

function* removeWish({ payload: { service } }) {
  console.log('remove wish', service)
  try {
    yield put(removeFromWishlist(service.id))
    yield call(wishlistDBCalls.removeWish, service.id)
  } catch (err) {
    yield put(addToWishlist(service))
  }
}

function* addWishRequest() {
  yield takeLatest(ADD_WISH_REQUESTED, addWish)
}

function* removeWishRequest() {
  yield takeLatest(REMOVE_WISH_REQUESTED, removeWish)
}

export default function* wishlistSagas() {
  yield spawn(addWishRequest)
  yield spawn(removeWishRequest)
}