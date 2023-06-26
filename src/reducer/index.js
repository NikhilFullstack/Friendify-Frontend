import {combineReducers} from "@reduxjs/toolkit";

import authReducer from "../slices/authSlice"
import profileReducer from "../slices/profileSlice";
import feedReducer from "../slices/feedSlice"
import allUserReducer from "../slices/allUserSlice"

const rootReducer  = combineReducers({
    auth: authReducer,
    profile:profileReducer,
    feed:feedReducer,
    allUser:allUserReducer,

})

export default rootReducer