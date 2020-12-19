import { createSlice } from "@reduxjs/toolkit";

const user = createSlice({
  name: "user",
  initialState: {
    info: {
      displayName: "",
      photoURL: "",
      email: "",
    },
  },
  reducers: {
    storeUser: (state, action) => {
      state.info = action.payload;
    },
    clearUser: (state) => state,
  },
});

export const { storeUser, clearUser } = user.actions;

export default user.reducer;
