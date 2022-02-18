import { dealersReducer } from "./dealersReducer";
import { combineReducers } from "redux";



export default combineReducers({
    dealers: dealersReducer
})