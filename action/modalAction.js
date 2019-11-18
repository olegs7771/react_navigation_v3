import {
  ADD_PLACE,
  ADD_LOCATION,
  SELECT_PLACE,
  DELETE_PLACE,
  DELETE_SHARED_PLACE,
  CLOSE_PLACE,
  SHARE_PLACE
} from "./types";
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
export const deleteSharedPlace = () => {
  return {
    type: DELETE_SHARED_PLACE
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
export const sharePlace = placeToShare => {
  console.log("in action placeToShare", placeToShare);

  return {
    type: SHARE_PLACE,
    payload: placeToShare
  };
};
