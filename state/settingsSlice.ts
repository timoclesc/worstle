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
      if (state.darkMode) setColorPallete(colors.light);
      else setColorPallete(colors.dark);
      state.darkMode = !state.darkMode;
    },
  },
});

export const { toggleDarkMode } = settingsSlice.actions;
export default settingsSlice.reducer;
