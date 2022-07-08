import React, { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { subredditActions } from "../../store/subredditSlice";
import getSubredditPosts from "../../store/subredditApi";
import { getSubredditComments } from "../../store/subredditApi";
import PostLoading from "../postLoading/postLoading";

import Main from "./main";
import randomNum from "../../helper/generateNumber";

export default function MainContainer() {
  const postsLoaded = useSelector((state) => state.subreddit.loaded);
  const subredditPost = useSelector((state) => state.subreddit.posts);
  const selectedSubreddit = useSelector(
    (state) => state.subreddit.selectedSubreddit
  );

  // console.log(subredditPost);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSubredditPosts(selectedSubreddit));
  }, [dispatch, selectedSubreddit]);

  const toggleCommentSection = (index) => {
    const getComments = (permalink) => {
      dispatch(getSubredditComments(index, permalink));
    };

    return getComments;
  };

  // if (!postsLoaded) {
  //   return Array(randomNum(3, 10)).fill(<PostLoading />);
  // }

  return (
    <Fragment>
      {subredditPost.map((item, index) => {
        // console.log(item);
        return (
          <Main
            author={item.author}
            numComments={item.num_comments}
            title={item.title}
            key={item.id}
            image={item.url}
            item={item}
            id={item.id}
            permalink={item.permalink}
            onToggleComments={toggleCommentSection(index)}
            comments={item.comments}
            postItem={item}
            loadingComments={item.loadingComments}
            errorComments={item.errorComments}
            ups={item.ups}
            url={item.url}
            time={item.created_utc}
            showingComments={item.showingComments}
            // voteValue={item.}
          />
        );
      })}
    </Fragment>
  );
}
