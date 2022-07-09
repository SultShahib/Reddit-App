import React, { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import getSubredditPosts from "../../store/subredditApi";
import { getSubredditComments } from "../../store/subredditApi";
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

  useEffect(() => {
    dispatch(getSubredditPosts(selectedSubreddit));
  }, [dispatch, selectedSubreddit]);

  const post = useSelector(selectFilteredPosts);

  const toggleCommentSection = (index) => {
    const getComments = (permalink) => {
      dispatch(getSubredditComments(index, permalink));
    };

    return getComments;
  };

  if (!postsLoaded) {
    return Array(randomNum(3, 10)).fill(<PostLoading />);
  }

  return (
    <Fragment>
      {post.map((item, index) => {
        // console.log(item);
        return (
          <Main
            author={item.author} //y
            numComments={item.num_comments} //y
            title={item.title} //y
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
