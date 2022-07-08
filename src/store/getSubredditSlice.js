import React from "react";
import { createSlice } from "@reduxjs/toolkit";

const getSubredditState = {
  loading: false,
  error: false,
  subreddits: [],
  searchTerm: "",
};

const getSubredditSlice = createSlice({
  name: "getSubreddit",
  initialState: getSubredditState,
  reducers: {
    startGetSubreddits(state) {
      state.loading = true;
      state.error = false;
    },
    getSubredditsSuccess(state, action) {
      state.loading = false;
      state.subreddits = action.payload;
    },
    getSubredditsFailed(state) {
      state.loading = false;
      state.error = true;
    },
  },
});

export default getSubredditSlice;

export const getSubredditAction = getSubredditSlice.actions;
