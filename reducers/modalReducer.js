import { ADD_PLACE } from "../action/types";
const initialState = {
  places: []
};
export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_PLACE:
      return {
        ...state,
        places: state.places.concat(action.payload)
      };
    default:
      return state;
  }
}
