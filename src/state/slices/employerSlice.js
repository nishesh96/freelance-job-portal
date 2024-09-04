import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchEmployerJobs = createAsyncThunk(
  "fetchEmployerJobs",
  async () => {
    try {
      // const storedJobsList = localStorage.getItem("jobsList");
      // if (storedJobsList) {
      //   return JSON.parse(storedJobsList);
      // } else {
      const response = await fetch("/employerJobs.json");
      if (response.ok) {
        const result = await response.json();
        // localStorage.setItem("jobsList", JSON.stringify(result));
        return result;
      } else {
        throw new Error("Failed to fetch jobs");
      }
    } catch (error) {
      console.log("error", error);
    }
  }
);

export const fetchApplicantList = createAsyncThunk(
  "fetchApplicantList",
  async () => {
    try {
      const response = await fetch("/freelancers.json");
      if (response.ok) {
        const result = await response.json();
        return result;
      } else {
        throw new Error("Failed to fetch applicants");
      }
    } catch (error) {
      console.log("error", error);
    }
  }
);

const employerSlice = createSlice({
  name: "employer",
  initialState: {
    applicantsList: [],
    jobsList: [],
    isLoading: false,
  },
  reducers: {
    setJobList: (state, action) => {
      state.jobsList = action.payload;
    },
    addNewJob: (state, action) => {
      state.jobsList.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchEmployerJobs.pending, (state) => {
        state.jobsList = [];
        state.isLoading = true;
      })
      .addCase(fetchEmployerJobs.fulfilled, (state, action) => {
        state.jobsList = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchEmployerJobs.rejected, (state) => {
        state.jobsList = [];
        state.isLoading = false;
      })
      .addCase(fetchApplicantList.pending, (state) => {
        state.applicantsList = [];
        state.isLoading = false;
      })
      .addCase(fetchApplicantList.fulfilled, (state, action) => {
        state.applicantsList = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchApplicantList.rejected, (state) => {
        state.applicantsList = [];
        state.isLoading = false;
      });
  },
});

export const { setJobList, addNewJob } = employerSlice.actions;
export default employerSlice.reducer;
