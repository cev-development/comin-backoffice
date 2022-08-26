import { combineReducers } from "redux";

import auth from "./auth/reducer";
import base from "./base/reducer";
import users from "./users/reducer";

export default combineReducers({
  auth,
  base,
  users,
});
