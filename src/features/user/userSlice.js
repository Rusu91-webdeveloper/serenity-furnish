import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

//? This 2 are the themes which i choose from daisy UI
const themes = {
  cmyk: "cmyk",
  sunset: "sunset",
};

const GetThemeFromLocalStorage = () => {
  const theme = localStorage.getItem("theme") || themes.cmyk;
  document.documentElement.setAttribute("data-theme", theme);
  return theme;
};

const initialState = {
  user: { username: "emanuel" },
  theme: GetThemeFromLocalStorage,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      console.log("login");
    },
    logoutUser: (state) => {
      state.user = null;
      localStorage.removeItem("user");
      toast.success("Logged out successfully");
    },
    toggleTheme: (state) => {
      const { cmyk, sunset } = themes;
      state.theme = state.theme === sunset ? cmyk : sunset;
      document.documentElement.setAttribute("data-theme", state.theme);
      localStorage.setItem("theme", state.theme);
    },
  },
});

export const { loginUser, logoutUser, toggleTheme } = userSlice.actions;
export default userSlice.reducer;
