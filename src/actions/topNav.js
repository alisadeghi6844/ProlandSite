import topNavData from "../DATA/topNavData.json";

export const topNavAction = () => {
    return async dispatch => {
        const data = topNavData;
        await dispatch({type: "TOP_NAV_DATA", payload: data});
    }
}