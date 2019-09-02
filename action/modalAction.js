import { ADD_PLACE } from "./types";
export const addPlace = place => {
  return {
    type: ADD_PLACE,
    payload: place
  };
};
