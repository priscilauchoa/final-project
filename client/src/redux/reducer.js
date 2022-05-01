import { combineReducers } from "redux";
// import LocationsReducer from "./needies/slice.js";
import NeediesReducer from "./needies/slice.js";
// import messagesReducer from "./messages/slice.js";
// import onlineUsersReducer from "./onlineUsers/slice.js";

const rootReducer = combineReducers({
    // Locations: LocationsReducer,
    Needies: NeediesReducer,
});

export default rootReducer;
