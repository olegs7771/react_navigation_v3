import { ADD_PLACE, SELECT_PLACE, DELETE_PLACE, CLOSE_PLACE } from "./types";
export const addPlace = place => {
  return {
    type: ADD_PLACE,
    payload: place
  };
};

export const deletePlace = () => {
  return {
    type: DELETE_PLACE
  };
};
export const selectPlaceID = id => {
  return {
    type: SELECT_PLACE,
    payload: id
  };
};
export const closePlace = () => {
  return {
    type: CLOSE_PLACE
  };
};
