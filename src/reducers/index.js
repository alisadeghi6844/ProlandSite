import {combineReducers} from "redux";
import {topNavReducer} from "./topNav";
import {homePageCoursesReducer} from "./homePageCourses";

export const reducers = combineReducers({
    topNav: topNavReducer,
    homePageCourses: homePageCoursesReducer
});