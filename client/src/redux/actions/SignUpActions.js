import axios from "axios";

export function userSignUpRequest(userData){
  return dispatch => {
    return axios.post("/api/register", userData);
  }
}
