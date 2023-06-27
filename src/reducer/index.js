import {combineReducers} from "@reduxjs/toolkit";

import authReducer from "../slices/authSlice"
import profileReducer from "../slices/profileSlice";
import feedReducer from "../slices/feedSlice"
import allUserReducer from "../slices/allUserSlice"
import searchReducer from "../slices/searchSlice"
const rootReducer  = combineReducers({
    auth: authReducer,
    profile:profileReducer,
    feed:feedReducer,
    allUser:allUserReducer,
    search:searchReducer,
})

export default rootReducer