import {applyMiddleware, compose, createStore} from "redux";
import thunk from "redux-thunk";
import {reducers} from "../reducers";
import {topNavAction} from "../actions/topNav";
import {loadingBarMiddleware} from "react-redux-loading-bar";

export const store = createStore(reducers,compose(applyMiddleware(thunk,loadingBarMiddleware())));

store.dispatch(topNavAction());