import { combineReducers } from 'redux';

import auth from './auth/reducer';
import base from './base/reducer';

export default combineReducers({
  auth,
  base,
});
