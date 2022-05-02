import { combineReducers } from "redux";
// import LocationsReducer from "./needies/slice.js";
import NeediesReducer from "./needies-list/slice.js";
import Help from "./help/slice.js";
// import messagesReducer from "./messages/slice.js";
// import onlineUsersReducer from "./onlineUsers/slice.js";

const rootReducer = combineReducers({
    // Locations: LocationsReducer,
    Needy: Help,
    Needies: NeediesReducer,
});

export default rootReducer;
