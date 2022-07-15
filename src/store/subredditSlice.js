import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "@reduxjs/toolkit";

const subredditData = {
  data: "",
  loaded: false,
  posts: [],
  getPostError: false,
  comments: [],
  clicked: false,
  searchTerm: "",
  id: "",
  selectedSubreddit: "/r/pics/",
};

// Redux slice for Subreddits Posts and Comments

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

const selectPosts = (state) => state.subreddit.posts;
const selectSearchTerm = (state) => state.subreddit.searchTerm;
export const selectSelectedSubreddit = (state) =>
  state.reddit.selectedSubreddit;

// SelectFilteredPosts gets post data according to the user input search at search bar
export const selectFilteredPosts = createSelector(
  [selectPosts, selectSearchTerm],
  (posts, searchTerm) => {
    if (searchTerm !== "") {
      return posts.filter((post) =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return posts;
  }
);

export const subredditActions = SubRedditSlice.actions;

export default SubRedditSlice;
