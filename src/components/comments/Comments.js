import React from "react";
import classes from "./commentStyle.module.css";
// import { useDispatch, useSelector } from "react-redux";
import ReactMarkdown from "react-markdown";
import moment from "moment";

export default function Comment({ author, comment, key, time }) {
  return (
    <div className={classes.comment}>
      <div className={classes.comment_data}>
        <p className={classes.comment_author}>{author}</p>
        <p className={classes.comment_time}>{moment.unix(time).fromNow()}</p>
      </div>
      <p className={classes.comment_text}>{comment}</p>

      {/* To convert Markdown text from reddit api to Html code */}
      <ReactMarkdown source={comment} />
    </div>
  );
}
