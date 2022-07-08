import React, { Fragment, useEffect } from "react";
import classes from "./commentStyle.module.css";
import { useDispatch, useSelector } from "react-redux";
import { subredditActions } from "../../store/subredditSlice";
import Comments from "../../comments/comments";
import { getSubredditComments } from "../../store/subredditApi";
import ReactMarkdown from "react-markdown";

export default function Comment({
  title,
  comment,
  id,
  permalink,
  getComments,
  postItem,
  body,
  author,
}) {
  return (
    <Fragment>
      <div className={classes.comment}>
        <div className={classes.comment_data}>
          <p className={classes.comment_author}>{author}</p>
          <p className={classes.comment_time}>{}</p>
          <p className={classes.comment_author}>{body}</p>
        </div>
        <ReactMarkdown source={comment} />
      </div>
    </Fragment>
  );
}
