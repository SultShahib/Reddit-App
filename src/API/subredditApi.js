import { subredditActions } from "../store/subredditSlice";
import { getSubredditPost, getSubreddit, getCommentsPost } from "./redditApi";
import { getSubredditAction } from "../store/getSubredditSlice";

// Action Creator Thunks

// Fetches Subreddit posts. Uses the getSubredditPost async function.
// Stored fetch data to subredditSlice - posts
// Added addtional data: Showing comments, comments, loadingComments and error comments to be used when displaying comments after user click
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

// Fetches Subreddit Comments. Uses the getCommentsPost async function from redditApi
// Stores the index and comments into subredditSlice.posts.comments

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

// Fetches the subreddit pages. Uses the getSubreddit async function from redditAPi
// Stored in getSubredditSlice.subreddits

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
