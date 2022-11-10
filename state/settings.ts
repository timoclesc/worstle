import create from "zustand";

interface SettingsState {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const useSettingsStore = create<SettingsState>((set) => ({
  darkMode: true,
  toggleDarkMode: () => set((state) => ({ darkMode: !state.darkMode })),
}));

export default useSettingsStore;
