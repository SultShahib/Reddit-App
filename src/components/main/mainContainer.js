import React, { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { subredditActions } from "../../store/subredditSlice";
import getRedditData from "../../store/subredditApi";
import { getPostComments } from "../../store/subredditApi";
import Main from "./main";

export default function MainContainer() {
  const postsLoaded = useSelector((state) => state.subreddit.loaded);
  const subredditPost = useSelector((state) => state.subreddit.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRedditData("hot"));
  }, [dispatch]);

  console.log(subredditPost);
  return (
    <Fragment>
      {postsLoaded ? (
        subredditPost.map((item) => {
          // console.log(item.perm);
          return (
            <Main
              author={item.author}
              comments={item.num_comments}
              title={item.title}
              key={item.id}
              image={item.url}
              item={item}
              id={item.id}
              permalink={item.permalink}
            />
          );
        })
      ) : (
        <h1>Loading...</h1>
      )}
    </Fragment>
  );
}
