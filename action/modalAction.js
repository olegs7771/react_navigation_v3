import { ADD_PLACE, SELECT_PLACE, DELETE_PLACE } from "./types";
export const addPlace = place => {
  return {
    type: ADD_PLACE,
    payload: place
  };
};

export const deletePlace = key => {
  return {
    type: DELETE_PLACE,
    payload: key
  };
};
export const selectPlaceID = id => {
  console.log("id", id);

  return {
    type: SELECT_PLACE,
    payload: id
  };
};
