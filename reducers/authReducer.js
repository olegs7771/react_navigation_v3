import { REGISTER_USER } from "../action/types";
const initialState = {
  isAuthenticated: false,
  user: null
};
export default function(state = initialState, action) {
  switch (action.type) {
    case REGISTER_USER:
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true
      };
    default:
      return state;
  }
}
