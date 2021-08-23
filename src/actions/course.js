import singleCourse from "../DATA/singleCourse.json";
export const getSingleCourse = courseId=>{
    return async dispatch=>{
        const data = singleCourse;
        await dispatch({type:"GET_COURSE",payload:data.HtmlCssCourse});
    }
}