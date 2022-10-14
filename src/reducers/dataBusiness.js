import { GET_DATA_BUSINESS } from "../actions";

const DataBusiness = (state = [], action) => {
    switch (action.type) {
        case GET_DATA_BUSINESS:
            // console.log(action.data);
            return state = action.data
        default:
            return state
    }
}
export default DataBusiness;