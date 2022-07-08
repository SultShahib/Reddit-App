import React from "react";
import Skeleton from "react-loading-skeleton";
import "./post.css";
// import "./PostLoading.module.css";
import {
  TiArrowUpOutline,
  TiArrowDownOutline,
  TiMessage,
} from "react-icons/ti";
import randomNum from "../../helper/generateNumber";

const PostLoading = () => {
  return (
    <article className="post">
      <div className="post-votes-container">
        <button
          type="button"
          className="icon-action-button up-vote"
          aria-label="Up vote"
        >
          <TiArrowUpOutline className="icon-action" />
        </button>
        <Skeleton className="post-votes-value post-votes-value-loading" />
        <button
          type="button"
          className="icon-action-button down-vote"
          aria-label="Down vote"
        >
          <TiArrowDownOutline className="icon-action" />
        </button>
      </div>
      <div className="post-container">
        <h3 className="post-title">
          <Skeleton width={randomNum(100, 200)} />
        </h3>

        <div className="post-image-container">
          <Skeleton height={250} />
        </div>

        <div className="post-details">
          <span>
            <Skeleton width={randomNum(20, 50)} />
          </span>
          <span>
            <Skeleton width={randomNum(50, 100)} />
          </span>
          <span className="post-comments-container">
            <button
              type="button"
              className="icon-action-button"
              aria-label="Show comments"
            >
              <TiMessage className="icon-action" />
            </button>
            <Skeleton width={randomNum(10, 50)} />
          </span>
        </div>
      </div>
    </article>
  );
};

export default PostLoading;
