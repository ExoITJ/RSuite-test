import { createSlice } from "@reduxjs/toolkit";
import { initialStateType } from "./MyHeaderTypes";
import { RootState } from "../../store/store";

const initialState: initialStateType = {
  sidebarExpand: false,
  darkTheme: "light"
};

const myHeaderSlice = createSlice({
  name: "header",
  initialState,
  reducers: {
    setSidebarExpand: (state) => {
      state.sidebarExpand = !state.sidebarExpand;
    },
    setDarkTheme: (state) => {
      if (state.darkTheme === "light") {
        state.darkTheme = "dark";
      } else {
        state.darkTheme = "light";
      }
    }
  },
  extraReducers: {}
});

export const myHeaderReducer = myHeaderSlice.reducer;

export const { setSidebarExpand, setDarkTheme } = myHeaderSlice.actions;

export const selectSidebarExpand = (state: RootState) =>
  state.header.sidebarExpand;
export const selectDarkTheme = (state: RootState) => state.header.darkTheme;
