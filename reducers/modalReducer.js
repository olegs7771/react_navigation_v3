import { ADD_PLACE, SELECT_PLACE, CLOSE_PLACE } from "../action/types";
const initialState = {
  places: [],
  selectedPlace: null
};
export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_PLACE:
      return {
        ...state,
        places: state.places.concat(action.payload)
      };
    case SELECT_PLACE:
      return {
        ...state,
        selectedPlace: state.places.find(place => {
          return place.id === action.payload;
        })
      };
    case CLOSE_PLACE:
      return {
        ...state,
        selectedPlace: null
      };
    default:
      return state;
  }
}
