import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  loginEmail: "",
  profile: {
    name: "",
    age: "",
    email: "",
    profileImage: "",
    favoriteSongs: [""],
    cardNumber: "",
    expiry: "",
    cvv: "",
    isOnboardingDone: false,
    onboardingStep: 1,
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
      state.loginEmail = action.payload.email;
    },
    logout: () => {
      return initialState;
    },
    setOnboarding: (state, action) => {
      state.profile = { ...state.profile, ...action.payload };
    },
  },
});

export const { login, logout, setOnboarding } = userSlice.actions;

export default userSlice.reducer;
