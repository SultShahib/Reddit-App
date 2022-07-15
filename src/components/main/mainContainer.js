import React, { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import getSubredditPosts from "../../API/subredditApi";
import { getSubredditComments } from "../../API/subredditApi";
import PostLoading from "../postLoading/postLoading";
import { selectFilteredPosts } from "../../store/subredditSlice";

import Main from "./main";
import randomNum from "../../helper/generateNumber";

export default function MainContainer() {
  const postsLoaded = useSelector((state) => state.subreddit.loaded);
  const selectedSubreddit = useSelector(
    (state) => state.subreddit.selectedSubreddit
  );
  const dispatch = useDispatch();

  // Dispatch action to get the subreddit Posts with the selected subreddit (default being /r/pics subreddit)
  useEffect(() => {
    dispatch(getSubredditPosts(selectedSubreddit));
  }, [dispatch, selectedSubreddit]);

  const post = useSelector(selectFilteredPosts);

  // Higher order Function passed into main with the index of selected subreddit which return another function to dispatch action to get comments with the same index as the selected subreddit post.
  //
  const toggleCommentSection = (index) => {
    const getComments = (permalink) => {
      dispatch(getSubredditComments(index, permalink));
    };

    return getComments;
  };

  // Returns Skeletal outline of Page when fetching Subreddit Posts
  if (!postsLoaded) {
    return Array(randomNum(3, 10)).fill(<PostLoading />);
  }

  return (
    <Fragment>
      {post.map((item, index) => {
        return (
          <Main
            author={item.author}
            numComments={item.num_comments}
            title={item.title}
            key={item.id}
            id={item.id}
            permalink={item.permalink}
            onToggleComments={toggleCommentSection(index)}
            postItem={item}
            loadingComments={item.loadingComments}
            errorComments={item.errorComments}
            ups={item.ups}
            url={item.url}
            time={item.created_utc}
            showingComments={item.showingComments}
          />
        );
      })}
    </Fragment>
  );
}
