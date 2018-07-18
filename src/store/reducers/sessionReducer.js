import {
  FETCHED_SCHEDULE_INFO,
  FETCHED_FILTER_TAGS,
  CLEAR_APPLIED_FILTERS,
  APPLY_FILTERS,
  UPDATE_FAVORITES
} from "../actions";

let appliedFilters = window.sessionStorage.getItem("wnin.appliedFilters");
let favorites = window.sessionStorage.getItem("wnin.favorites");
appliedFilters = appliedFilters ? appliedFilters.split(",") : [];
favorites = favorites ? favorites.split(",") : [];

function sessionReducer(
  state = {
    data: [],
    filters: [],
    appliedFilters: appliedFilters,
    favorites: favorites
  },
  action
) {
  switch (action.type) {
    case FETCHED_SCHEDULE_INFO:
      return Object.assign({}, state, {
        data: action.value
      });
    case FETCHED_FILTER_TAGS:
      return Object.assign({}, state, {
        filters: action.value
      });
    case CLEAR_APPLIED_FILTERS:
      return Object.assign({}, state, {
        appliedFilters: []
      });
    case APPLY_FILTERS:
      return Object.assign({}, state, {
        appliedFilters: [...action.value]
      });
    case UPDATE_FAVORITES:
      return Object.assign({}, state, {
        favorites: [...action.value]
      });
    default:
      return state;
  }
}

export default sessionReducer;
