// get data from input
export const addEmployee = (value) => async (dispatch) => {
  dispatch({ type: "ADD_DATA_EMPLOYEE", payload: value });
};
