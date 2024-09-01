import { configureStore } from "@reduxjs/toolkit";
import freelancerSlice from "./slices/freelancerSlice";
import authSlice from "./slices/authSlice";
import employerSlice from "./slices/employerSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    freelancer: freelancerSlice,
    employer: employerSlice,
  },
});

export default store;
