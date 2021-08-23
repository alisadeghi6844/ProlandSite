import {applyMiddleware, compose, createStore} from "redux";
import {reducers} from "../reducers";
import thunk from "redux-thunk";
import {topNavAction} from "../actions/topNav";

export const store = createStore(reducers,compose(applyMiddleware(thunk)));

store.dispatch(topNavAction());