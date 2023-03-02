import { combineReducers } from "redux";
import listEmployeReducers from "./listEmployeReducer";

// store employee
export default combineReducers({
  employee: listEmployeReducers,
});
