import {combineReducers} from "redux";
import {topNavReducer} from "./topNav";
import {homePageCoursesReducer} from "./homePageCourses";
import {studentsOpinionReducer} from "./studentsOpinion";
import {loadingBarReducer} from "react-redux-loading-bar";

export const reducers = combineReducers({
    topNav: topNavReducer,
    homePageCourses: homePageCoursesReducer,
    studentsOpinion: studentsOpinionReducer,
    loadingBar: loadingBarReducer
});