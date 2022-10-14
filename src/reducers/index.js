import { combineReducers } from "redux";
import DataLifeStyle from "./dataLifeStyle";
import DarkMode from "./darkmode";
import DataBusiness from "./dataBusiness";

const rootReducer = combineReducers({
    darkmode: DarkMode,
    dataLifeStyle: DataLifeStyle,
    // dataBusiness: DataBusiness,
})

export default rootReducer;