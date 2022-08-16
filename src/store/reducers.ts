import { combineReducers } from "@reduxjs/toolkit";
import { myHeaderReducer } from "../components/header/MyHeaderSlice";

export const reducers = combineReducers({
  header: myHeaderReducer
});
