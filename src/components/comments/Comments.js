import React from "react";
import moment from "moment";
import "./commentStyle.css";

// Comments Component renders comments.
export default function Comment({ author, comment, key, time }) {
  return (
    <div className="comment">
      <div className="comment-data">
        <p className="comment-author">{author}</p>
        <p className="comment-time">{moment.unix(time).fromNow()}</p>
      </div>
      <p className="comment-text">{comment}</p>
    </div>
  );
}
