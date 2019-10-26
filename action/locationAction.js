import { GET_CURRENT_LOCATION } from "./types";

//Get Current Location
export const getCurrentLocation = data => dispatch => {
  console.log("data", data);
  dispatch({
    type: GET_CURRENT_LOCATION,
    payload: data
  });
};
