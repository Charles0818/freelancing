import { combineReducers } from 'redux';
import accountReducer from './account';
import * as AccountReducers from './Account/index';
export const allReducers = combineReducers({
  ...AccountReducers,
})