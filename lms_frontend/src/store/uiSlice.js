import { createSlice } from "@reduxjs/toolkit";

const parseFlags = (flagsStr) => {
  try {
    if (!flagsStr) return {};
    // allow JSON or comma list like: chat,ai
    if (flagsStr.trim().startsWith("{")) return JSON.parse(flagsStr);
    return flagsStr
      .split(",")
      .map((x) => x.trim())
      .filter(Boolean)
      .reduce((acc, f) => ({ ...acc, [f]: true }), {});
  } catch {
    return {};
  }
};

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    theme: "light",
    sidebarOpen: true,
    featureFlags: parseFlags(process.env.REACT_APP_FEATURE_FLAGS || "")
  },
  reducers: {
    toggleTheme(state) {
      state.theme = state.theme === "light" ? "dark" : "light";
    },
    setTheme(state, action) {
      state.theme = action.payload || "light";
    },
    toggleSidebar(state) {
      state.sidebarOpen = !state.sidebarOpen;
    },
    setFeatureFlags(state, action) {
      state.featureFlags = { ...(action.payload || {}) };
    }
  }
});

export const { toggleTheme, setTheme, toggleSidebar, setFeatureFlags } = uiSlice.actions;
export default uiSlice.reducer;
