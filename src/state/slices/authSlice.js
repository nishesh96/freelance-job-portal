import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { mockApiLogin } from "services/api";

export const loginUser = createAsyncThunk(
  "auth/login",
  async ({ username, password, userType }, { rejectWithValue }) => {
    try {
      const data = await mockApiLogin(username, password, userType);
      localStorage.setItem("userInfo", JSON.stringify(data.userInfo));
      return data;
    } catch (error) {
      return rejectWithValue(
        error || "Error logging in. Please check your credentials.",
      );
    }
  },
);

const initialState = {
  isLoading: false,
  userInfo: null,
  userToken: localStorage.getItem("userToken") || null,
  userType: null,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logoutUser: (state) => {
      localStorage.removeItem("userToken");
      localStorage.removeItem("userInfo");

      state.isLoading = false;
      state.userInfo = null;
      state.userToken = null;
      state.userType = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        localStorage.setItem("userToken", payload.userToken);
        state.userInfo = payload.userInfo;
        state.userToken = payload.userToken;
        state.isLoading = false;
        state.userType = payload.userType;
      })
      .addCase(loginUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});
export const { logoutUser } = authSlice.actions;
export default authSlice.reducer;
