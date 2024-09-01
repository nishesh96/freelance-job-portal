import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { mockApiLogin } from "services/api";

export const registerUser = createAsyncThunk(
  "auth/register",
  async ({ username, password, userType }, { rejectWithValue }) => {
    try {
      const data = await mockApiLogin(username, password, userType);
      return data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue("Incorrect Username or Password");
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

const initialState = {
  isLoading: false,
  userInfo: null,
  userToken: null,
  userType: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logoutUser: (state) => {
      localStorage.removeItem("userToken");
      state.isLoading = false;
      state.userInfo = null;
      state.userToken = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        localStorage.setItem("userToken", payload.userToken);
        state.userInfo = payload.userInfo;
        state.userToken = payload.userToken;
        state.isLoading = false;
        state.userType = payload.userType;
      })
      .addCase(registerUser.rejected, (state) => {
        state.isLoading = false;
      });
  },
});
export const { logoutUser } = authSlice.actions;
export default authSlice.reducer;
