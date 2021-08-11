export const topNavReducer = (state = [], action) => {
    switch (action.type) {
        case "TOP_NAV_DATA" :
            return [...action.payload];
        default:
            return state;
    }
}