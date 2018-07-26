import { UPDATE_TAB } from "../actions";

function tab(state = { value: "summary" }, action) {
  switch (action.type) {
    case UPDATE_TAB:
      return Object.assign({}, state, {
        value: action.value
      });
    default:
      return state;
  }
}

export default tab;
