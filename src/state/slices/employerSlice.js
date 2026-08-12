import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchEmployerJobs = createAsyncThunk(
  "employer/fetchEmployerJobs",
  async (_, { rejectWithValue }) => {
    try {
      const storedJobsList = localStorage.getItem("jobsList");

      if (storedJobsList) {
        return JSON.parse(storedJobsList);
      }

      const response = await fetch(`${process.env.PUBLIC_URL}/jobs.json`);

      if (!response.ok) {
        throw new Error("Failed to fetch jobs");
      }

      const result = await response.json();
      localStorage.setItem("jobsList", JSON.stringify(result));
      return result;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  },
);

export const fetchApplicantList = createAsyncThunk(
  "employer/fetchApplicantList",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch("/freelancers.json");
      if (response.ok) {
        const result = await response.json();
        return result;
      } else {
        throw new Error("Failed to fetch applicants");
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const addNewJob = createAsyncThunk(
  "employer/addNewJob",
  async (job, { getState }) => {
    const jobs = [...getState().employer.jobsList, job];
    localStorage.setItem("jobsList", JSON.stringify(jobs));
    return job;
  },
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
        state.isLoading = true;
      })
      .addCase(fetchApplicantList.fulfilled, (state, action) => {
        state.applicantsList = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchApplicantList.rejected, (state) => {
        state.applicantsList = [];
        state.isLoading = false;
      })
      .addCase(addNewJob.fulfilled, (state, action) => {
        state.jobsList.push(action.payload);
      });
  },
});

export const { setJobList } = employerSlice.actions;
export default employerSlice.reducer;
