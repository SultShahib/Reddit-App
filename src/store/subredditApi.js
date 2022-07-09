import { subredditActions } from "./subredditSlice";
import { useSelector } from "react-redux";
import { getSubredditPost, getSubreddit, getCommentsPost } from "./redditApi";
import { getSubredditAction } from "./getSubredditSlice";

export default function getSubredditPosts(subredditName) {
  return async (dispatch) => {
    try {
      dispatch(subredditActions.loadingPostData());
      const subPost = await getSubredditPost(subredditName);

      const subredditPostData = subPost.map((data) => ({
        ...data,
        showingComments: false,
        comments: [],
        loadingComments: false,
        errorComments: false,
      }));

      dispatch(subredditActions.loadedPostData(subredditPostData));
    } catch (err) {
      dispatch(subredditActions.errorLoadingPost());
    }
  };
}

export function getSubredditComments(index, permalink) {
  return async (dispatch) => {
    try {
      dispatch(subredditActions.loadingComments(index));
      const subredditComments = await getCommentsPost(permalink);
      dispatch(
        subredditActions.loadedPostComments({ index, subredditComments })
      );
    } catch (err) {
      dispatch(subredditActions.errorLoadingComments(index));
    }
  };
}

export function getSubreddits() {
  return async (dispatch) => {
    try {
      dispatch(getSubredditAction.startGetSubreddits());
      const fetchSubreddits = await getSubreddit();
      dispatch(getSubredditAction.getSubredditsSuccess(fetchSubreddits));
    } catch (err) {
      dispatch(getSubredditAction.getSubredditsFailed(err));
    }
  };
}

//
