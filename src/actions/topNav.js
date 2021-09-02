import topNavData from "../DATA/topNavData.json";
import slideStudentsData from "../DATA/slideStudentsData.json";
import homePageCoursesData from "../DATA/homePageCoursesData.json";

export const topNavAction = () => {
    return async dispatch => {
        const data = topNavData;
        await dispatch({type: "TOP_NAV_DATA", payload: data});
        const dataCourses = homePageCoursesData;
        await dispatch({type: "HOMEPAGE_COURSES", payload: dataCourses});
        const studentsOpinion = slideStudentsData;
        await dispatch({type: "STUDENTS_OPINION", payload: studentsOpinion});
    }
}