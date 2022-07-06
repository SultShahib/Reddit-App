import React, { Fragment, useEffect } from "react";
import classes from "./footerStyle.module.css";
import { useDispatch, useSelector } from "react-redux";
import { subredditActions } from "../../store/subredditSlice";
import Comments from "../../comments/comments";
import { getPostComments } from "../../store/subredditApi";

export default function Footer({ title, comments, id }) {
  const dispatch = useDispatch();
  const commentSectionVisible = useSelector(
    (state) => state.subreddit.showComments
  );
  const loadedComments = useSelector((state) => state.subreddit.loadedComments);
  const commentsData = useSelector((state) => state.subreddit.comments);

  useEffect(() => {
    dispatch(getPostComments(id));
  }, [dispatch, id]);

  const showCommentSection = () => {
    dispatch(subredditActions.showComment());
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
      {loadedComments ? (
        commentsData.map((item) => console.log(item))
      ) : (
        <p>Loading</p>
      )}
      <Comments id={id} />
    </Fragment>
  );
}
