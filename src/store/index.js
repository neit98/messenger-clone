import { configureStore } from "@reduxjs/toolkit";

import userReducer from "../features/user/userSlice";

const store = configureStore({ reducer: userReducer });
// The store now has redux-thunk added and the Redux DevTools Extension is turned on

export default store;
