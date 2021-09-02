import {combineReducers} from "redux";
import {topNavReducer} from "./topNav";
import {homePageCoursesReducer} from "./homePageCourses";
import {studentsOpinionReducer} from "./studentsOpinion";

export const reducers = combineReducers({
    topNav: topNavReducer,
    homePageCourses: homePageCoursesReducer,
    studentsOpinion: studentsOpinionReducer,
   });