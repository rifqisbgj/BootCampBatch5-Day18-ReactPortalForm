const listEmployeReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_DATA_EMPLOYEE":
      return action.payload;
    default:
      return state;
  }
};

export default listEmployeReducer;
