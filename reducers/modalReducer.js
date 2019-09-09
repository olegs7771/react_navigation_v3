import {
  ADD_PLACE,
  SELECT_PLACE,
  CLOSE_PLACE,
  DELETE_PLACE,
  SHARE_PLACE
} from "../action/types";
const initialState = {
  places: [],
  selectedPlace: null,
  sharedPlaces: []
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
    case DELETE_PLACE:
      return {
        ...state,
        places: state.places.filter(place => {
          return place.id !== state.selectedPlace.id;
        }),
        selectedPlace: null
      };
    case SHARE_PLACE:
      return {
        ...state,
        sharedPlaces: state.sharedPlaces.concat(action.payload)
      };
    default:
      return state;
  }
}
