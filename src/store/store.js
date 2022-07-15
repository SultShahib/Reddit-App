import { configureStore } from "@reduxjs/toolkit";
import SubRedditSlice from "./subredditSlice";
import getSubredditSlice from "./getSubredditSlice";

const store = configureStore({
  reducer: {
    subreddit: SubRedditSlice.reducer,
    getSubreddit: getSubredditSlice.reducer,
  },
});

export default store;
