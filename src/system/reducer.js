import { combineReducers } from 'redux';
import AccountReducer from '../account/account_reducer';

const rootReducer = combineReducers({
   account : AccountReducer
  })
  export default rootReducer;