import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import RootReducer from "./RootReducer";

export default createStore(
    RootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);