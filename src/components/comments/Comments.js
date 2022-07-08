import React from "react";
import classes from "./commentStyle.module.css";
// import { useDispatch, useSelector } from "react-redux";
// import { subredditActions } from "../../store/subredditSlice";
// import { getSubredditComments } from "../../store/subredditApi";
import ReactMarkdown from "react-markdown";
import moment from "moment";

export default function Comment({ author, post, comment, key, body, time }) {
  return (
    <div className={classes.comment}>
      <div className={classes.comment_data}>
        <p className={classes.comment_author}>{author}</p>
        <p className={classes.comment_time}>{moment.unix(time).fromNow()}</p>
      </div>
      <p className={classes.comment_text}>{comment}</p>
      <ReactMarkdown source={comment} />
    </div>
  );
}
