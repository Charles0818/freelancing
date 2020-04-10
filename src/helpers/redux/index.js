
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { allReducers } from './reducers';
import * as types from './actions/types';
import * as actions from './actions/index';

const sagaMiddleWare = createSagaMiddleware();
const store = createStore(
    allReducers,
    applyMiddleware(sagaMiddleWare),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export { types, store, actions };