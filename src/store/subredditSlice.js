import { createSlice } from "@reduxjs/toolkit";

const subredditData = {
  data: "",
  loaded: false,
  posts: null,
  getPostError: false,
  comments: [],
  showComments: false,
  loadedComments: false,
  clicked: false,
  id: "",
};

const SubRedditSlice = createSlice({
  name: "SubredditPage",
  initialState: subredditData,
  reducers: {
    getData(state, action) {
      state.data = action.payload.subredditData;
    },

    loadingPostData(state) {
      state.loaded = false;
      state.getPostError = false;
    },

    loadedPostData(state) {
      state.loaded = true;
      state.getPostError = false;
    },

    errorLoadingPost(state) {
      state.loaded = false;
      state.getPostError = true;
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
      state.comments.push(action.payload.subredditComments);
    },

    showComment(state) {
      state.showComments = !state.showComments;
    },

    clickedComment(state) {
      state.clicked = !state.clicked;
    },

    getPostsId(state, action) {
      state.id = action.payload.postId;
    },
  },
});

export const subredditActions = SubRedditSlice.actions;

export default SubRedditSlice;
