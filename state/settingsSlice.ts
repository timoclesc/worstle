import { createSlice } from "@reduxjs/toolkit";

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
      state.darkMode = !state.darkMode;
    },
  },
});

export const { toggleDarkMode } = settingsSlice.actions;
export default settingsSlice.reducer;
