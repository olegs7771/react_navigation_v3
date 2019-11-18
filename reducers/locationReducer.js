import { GET_CURRENT_LOCATION } from "../action/types";
const initialState = {
  location: null
};
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_CURRENT_LOCATION:
      return {
        ...state,
        location: action.payload
      };
    default:
      return state;
  }
}
