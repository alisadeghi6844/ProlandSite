import {applyMiddleware, compose, createStore} from "redux";
import {reducers} from "../reducers";
import thunk from "redux-thunk";
import {topNavAction} from "../actions/topNav";

export const store = createStore(reducers,compose(applyMiddleware(thunk),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

store.dispatch(topNavAction());