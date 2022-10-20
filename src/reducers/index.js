import { combineReducers } from "redux";
import DataLifeStyle from "./dataLifeStyle";
import DarkMode from "./darkmode";
// import DataBusiness from "./dataBusiness";
import DataUserLogin from "./userdata";

const rootReducer = combineReducers({
    darkmode: DarkMode,
    dataLifeStyle: DataLifeStyle,
    dataUserLogin: DataUserLogin,
    // dataBusiness: DataBusiness,
 
})

export default rootReducer;