import API from "../API";

export const userSignedIn = (User) => ({
    type: "USER_SIGNED_IN",
    payload: User
});

export const userSignInRequest = (credentials) => (dispatch) => 
  API.User.userSignInRequest(credentials).then(
    User => dispatch(userSignedIn(User))
);