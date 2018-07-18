function makeActionCreator(type, ...argNames) {
  return function(...args) {
    const action = { type };
    argNames.forEach((arg, index) => {
      action[argNames[index]] = args[index];
    });
    return action;
  };
}


export const TOGGLE_SIDEBAR = "TOGGLE_SIDEBAR";
export const UPDATE_TAB = "UPDATE_TAB";
export const FETCHED_SCHEDULE_INFO = "FETCHED_SCHEDULE_INFO";
export const FETCHED_FILTER_TAGS = "FETCHED_FILTER_TAGS";
export const UPDATE_MAIN_LOADER = "UPDATE_MAIN_LOADER";
export const APPLY_FILTERS = "APPLY_FILTERS";
export const CLEAR_APPLIED_FILTERS = "CLEAR_APPLIED_FILTERS";
export const UPDATE_FAVORITES = "UPDATE_FAVROITES";

export const actionUpdateTab = makeActionCreator(UPDATE_TAB, "value");
export const actionUpdateScheduleInfo = makeActionCreator(FETCHED_SCHEDULE_INFO, "value");
export const actionUpdateFilterTags = makeActionCreator(FETCHED_FILTER_TAGS, "value");
export const actionToggleSidebar = makeActionCreator(TOGGLE_SIDEBAR, "value");
export const actionUpdateLoader = makeActionCreator(UPDATE_MAIN_LOADER, "value");
export const actionApplyFilters = makeActionCreator(APPLY_FILTERS, "value");
export const actionClearFilters = makeActionCreator(CLEAR_APPLIED_FILTERS);
export const actionUpdateFavorites = makeActionCreator(UPDATE_FAVORITES, "value");
