export const studentsOpinionReducer = (state = [], action) => {
    switch (action.type) {
        case "STUDENTS_OPINION":
            return [...action.payload];
        default:
            return state;
    }
}