import { createSlice } from "@reduxjs/toolkit";

const subredditData = {
  data: "",
  loaded: false,
  posts: [],
  getPostError: false,
  comments: [],
  clicked: false,
  id: "",
  selectedSubreddit: "/r/pics/",
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

    loadedPostData(state, action) {
      state.loaded = true;
      state.getPostError = false;
      state.posts = action.payload;
    },

    errorLoadingPost(state) {
      state.loaded = false;
      state.getPostError = true;
    },

    setSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },

    setSelectedSubreddit(state, action) {
      state.selectedSubreddit = action.payload;
      state.searchTerm = "";
    },

    loadingComments(state, action) {
      state.posts[action.payload].showingComments =
        !state.posts[action.payload].showingComments;

      if (!state.posts[action.payload].showingComments) {
        return;
      }
      state.posts[action.payload].loadingComments = false;
      state.posts[action.payload].errorComments = false;
    },

    loadedPostComments(state, action) {
      state.posts[action.payload.index].loadingComments = false;
      state.posts[action.payload.index].comments =
        action.payload.subredditComments;
    },

    errorLoadingComments(state, action) {
      state.posts[action.payload].errorComments = true;
      state.posts[action.payload].loadingComments = false;
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
