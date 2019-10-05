import { REGISTER_USER } from "./types";
export const regesterUser = user => {
  return {
    type: REGISTER_USER,
    payload: user
  };
};
