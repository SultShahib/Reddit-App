import React, { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
// import { subredditActions } from "../../store/subredditSlice";
import getRedditData from "../../store/subredditApi";
import { getPostComments } from "../../store/subredditApi";
import Main from "./main";

export default function MainContainer() {
  const postsLoaded = useSelector((state) => state.subreddit.loaded);
  //   const subredditComments = useSelector((state) => state.subreddit.comments);
  const subredditPost = useSelector((state) => state.subreddit.posts);
  const dispatch = useDispatch();
  //   const subRedditPosts = useSelector((state) => state.subreddit.post);

  useEffect(() => {
    dispatch(getRedditData("hot"));
  }, [dispatch]);

  return (
    <Fragment>
      {postsLoaded ? (
        subredditPost.map((item) => {
          //   console.log(item);
          return (
            <Main
              author={item.data.author}
              comments={item.data.num_comments}
              title={item.data.title}
              key={item.data.id}
              image={item.data.url}
              item={item}
              id={item.data.id}
            />
          );
        })
      ) : (
        <h1>Loading...</h1>
      )}
    </Fragment>
  );
}
