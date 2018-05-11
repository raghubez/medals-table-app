import DATA from "./medalsData";
import { sortDataOrderArray, generateInitialDataOrderArray } from "./utils";

export default (
  state = {
    data: DATA,
    dataOrderArray: generateInitialDataOrderArray(DATA),
    selectedRows: []
  },
  action
) => {
  switch (action.type) {
    case "SORT_DESCENDING":
      return {
        ...state,
        dataOrderArray: sortDataOrderArray(
          state.dataOrderArray,
          state.data,
          "medals",
          action.medalType,
          true
        )
      };
    case "RESET":
      return {
        ...state,
        dataOrderArray: generateInitialDataOrderArray(DATA),
        selectedRows: []
      };
    case "HANDLE_ROW_SELECTION":
      return {
        ...state,
        selectedRows: state.selectedRows.includes(action.country.id)
          ? state.selectedRows.filter(id => id !== action.country.id)
          : [...state.selectedRows, action.country.id]
      };
    case "DELETE":
      return {
        ...state,
        dataOrderArray: state.dataOrderArray.filter(
          id => !state.selectedRows.includes(id)
        )
      };
    default:
      return state;
  }
};
