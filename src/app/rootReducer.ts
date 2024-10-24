import { auth } from "@/features";
import { combineReducers } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  auth: auth.authReducer,
});

export default rootReducer;
