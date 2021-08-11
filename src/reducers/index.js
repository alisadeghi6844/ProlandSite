import {combineReducers} from "redux";
import {topNavReducer} from "./topNav";

export const reducers = combineReducers({
    topNav:topNavReducer,
});