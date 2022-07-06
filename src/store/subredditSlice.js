import { createSlice } from "@reduxjs/toolkit";

const subredditData = {
  data: "",
  loaded: false,
  posts: null,
  comments: "",
  showComments: false,
  loadedComments: false,
};

const SubRedditSlice = createSlice({
  name: "SubredditPage",
  initialState: subredditData,
  reducers: {
    getData(state, action) {
      state.data = action.payload.subredditData;
    },

    loadingData(state) {
      state.loaded = false;
    },

    loadedData(state) {
      state.loaded = true;
    },

    getPosts(state, action) {
      state.posts = action.payload.getData;
    },

    loadingComments(state, action) {
      state.loadedComments = false;
    },

    loadedComments(state, action) {
      state.loadedComments = true;
    },

    getComments(state, action) {
      state.comments = action.payload.subredditData;
    },

    showComment(state) {
      state.showComments = !state.showComments;
    },
  },
});

export const subredditActions = SubRedditSlice.actions;

export default SubRedditSlice;
