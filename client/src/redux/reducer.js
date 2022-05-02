import { combineReducers } from "redux";
// import LocationsReducer from "./needies/slice.js";
import NeediesReducer from "./needies-list/slice.js";
import NeedyReducer from "./needy/slice.js";
// import messagesReducer from "./messages/slice.js";
// import onlineUsersReducer from "./onlineUsers/slice.js";

const rootReducer = combineReducers({
    // Locations: LocationsReducer,
    Needy: NeedyReducer,
    Needies: NeediesReducer,
});

export default rootReducer;
