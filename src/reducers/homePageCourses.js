export const homePageCoursesReducer = (state = [], action) => {
    switch (action.type) {
        case "HOMEPAGE_COURSES":
            return [...action.payload];
        default:
            return state;
    }
}