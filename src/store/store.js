import { configureStore } from "@reduxjs/toolkit";
import SubRedditSlice from "./subredditSlice";

const store = configureStore({
  reducer: { subreddit: SubRedditSlice.reducer },
});

export default store;
