import { combineReducers } from "redux";
import modalReducer from "./modalReducer";
import authReducer from "./authReducer";
import locationReducer from "./locationReducer";

export default combineReducers({
  auth: authReducer,
  modal: modalReducer,
  location: locationReducer
});
