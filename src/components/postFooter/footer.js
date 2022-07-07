import React, { Fragment, useEffect } from "react";
import classes from "./footerStyle.module.css";
import { useDispatch, useSelector } from "react-redux";
import { subredditActions } from "../../store/subredditSlice";
import Comments from "../../comments/comments";
import { getPostComments } from "../../store/subredditApi";

export default function Footer({ title, comments, id, permalink }) {
  const dispatch = useDispatch();
  const commentSectionVisible = useSelector(
    (state) => state.subreddit.showComments
  );
  const clickedComment = useSelector((state) => state.subreddit.clicked);
  const loadedComments = useSelector((state) => state.subreddit.loadedComments);
  const commentsData = useSelector((state) => state.subreddit.comments);
  const postId = useSelector((state) => state.subreddit.id);

  // console.log(commentsData);

  const findId = postId.find((itemId) => itemId === id);

  useEffect(() => {
    dispatch(getPostComments(permalink));
  }, []);

  console.log(commentsData);

  const showCommentSection = (e) => {
    dispatch(subredditActions.showComment());
    dispatch(subredditActions.clickedComment());
  };

  return (
    <Fragment>
      <ul className={classes.footer}>
        <li className={classes.author}>{title}</li>
        <li className={classes.date}>12 hours ago</li>
        <li className={classes.comments} onClick={showCommentSection}>
          {comments}
        </li>
      </ul>
      {/* {clickedComment &&
        commentsData.map((item) =>
          item.id === id ? console.log(item.body) : console.log("Yup nuffin")
        )} */}

      {/* {clickedComment ? (
        loadedComments ? (
          commentsData.map((item) => {
            return <Comments text={item.body} />;
          })
        ) : (
          <p></p>
        )
      ) : (
        <p></p>
      )} */}
    </Fragment>
  );
}
