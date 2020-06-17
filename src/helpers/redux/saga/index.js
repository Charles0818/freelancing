import wishlistSagas from './wishlist';
import authSagas from './auth';
import { spawn } from 'redux-saga/effects';

export default function* rootSaga() {
    yield spawn(wishlistSagas)
    yield spawn(authSagas)
}
