import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

console.log("process.env", process.env.NODE_ENV);

const NODE_ENV = process.env.NODE_ENV;

const BASE_URL =
  NODE_ENV === "development"
    ? process.env.REACT_APP_LOCAL_URL
    : process.env.REACT_APP_PRODUCTION_URL;

console.log("BASE_URL", BASE_URL);

export const fetchJobs = createAsyncThunk("fetchJobs", async () => {
  try {
    const response = await fetch(`${BASE_URL}/jobs.json`);
    if (response.ok) {
      const result = await response.json();
      return result;
    } else {
      throw new Error("Failed to fetch jobs");
    }
  } catch (error) {
    console.log("error", error);
  }
});

const freelancerSlice = createSlice({
  name: "freelancer",
  initialState: {
    newUser: true,
    userProfile: {
      firstName: null,
      lastName: null,
      skillset: [],
      githubUserName: null,
    },
    jobsList: [],
    appliedJobIds: [],
    isLoading: false,
  },
  reducers: {
    setJobList: (state, action) => {
      state.jobsList = action.payload;
    },
    setProfile: (state, action) => {
      state.userProfile = { ...action.payload };
      state.newUser = false;
    },
    setAppliedJobs: (state, action) => {
      state.appliedJobIds.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchJobs.pending, (state) => {
        state.jobsList = [];
        state.isLoading = true;
      })
      .addCase(fetchJobs.fulfilled, (state, action) => {
        state.jobsList = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchJobs.rejected, (state) => {
        state.jobsList = [];
        state.isLoading = false;
      });
  },
});

export const { setProfile, setAppliedJobs, setJobList } =
  freelancerSlice.actions;
export default freelancerSlice.reducer;
