import { subredditActions } from "./subredditSlice";
import { useSelector } from "react-redux";

export default function getRedditData(subredditName) {
  return async (dispatch) => {
    const getReddit = async () => {
      dispatch(subredditActions.loadingData());
      const fetchReddit = await fetch(
        `https://www.reddit.com/r/pics/${subredditName}.json`
      );

      if (!fetchReddit.ok) {
        throw new Error("failed to extract data");
      }

      const subreddit = await fetchReddit.json();
      return subreddit;
    };
    const subredditData = await getReddit();

    try {
      dispatch(subredditActions.loadedData());
      const getData = subredditData.data.children.map((item) => item);
      dispatch(subredditActions.getPosts({ getData }));
    } catch (err) {
      throw new Error(err);
    }
  };
}

export function getPostComments(subredditPostsId) {
  return async (dispatch) => {
    const getReddit = async () => {
      dispatch(subredditActions.loadingComments());
      const fetchReddit = await fetch(
        `https://www.reddit.com/comments/${subredditPostsId}.json`
      );

      if (!fetchReddit.ok) {
        throw new Error("failed to extract data");
      }

      const subreddit = await fetchReddit.json();
      return subreddit;
    };
    const subredditData = await getReddit();

    try {
      dispatch(subredditActions.loadedComments());
      // const getData = subredditData.data.children.map((item) => item);
      dispatch(subredditActions.getComments({ subredditData }));
    } catch (err) {
      throw new Error(err);
    }
  };
}
