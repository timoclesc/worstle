import { createSlice } from "@reduxjs/toolkit";
import { colors, setColorPallete } from "../app/colors";

interface SettingsState {
  darkMode: boolean;
}

const initialState: SettingsState = {
  darkMode: true,
};

export const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      if (document.documentElement.classList.contains("dark"))
        document.documentElement.classList.remove("dark");
      else document.documentElement.classList.add("dark");
    },
  },
});

export const { toggleDarkMode } = settingsSlice.actions;
export default settingsSlice.reducer;
