import React from "react";
import Comment from "../comments/Comments";
import moment from "moment";
import "./main.css";
import { useState } from "react";
import Skeleton from "react-loading-skeleton";
import {
  TiArrowUpOutline,
  TiArrowUpThick,
  TiArrowDownOutline,
  TiArrowDownThick,
  TiMessage,
} from "react-icons/ti";
import Card from "../card/card";
import shortenNumber from "../../helper/shortenNumber";

// Consists the posts with the data provided by main container from the reddit api.
// It handles the logic for displaying the comment section by sending an action to the redux

export default function Main({
  author,
  numComments,
  title,
  postItem,
  id,
  permalink,
  onToggleComments,
  loadingComments,
  errorComments,
  url,
  time,
  ups,
  showingComments,
}) {
  const [voteValue, setVoteValue] = useState(0);

  /**
   * @param {number} newValue The new vote value
   */

  // OnHandlevote handles vote number based on upward and downward vote
  // Clicking on the upward vote sets voteValue to "1". If voteValue === "1", vote button turns green and thick
  // Clicking on the downward vote sets voteValue to "-1". If voteValue === "-1", vote button turns red and thick
  const onHandleVote = (newValue) => {
    if (newValue === voteValue) {
      setVoteValue(0);
    } else if (newValue === 1) {
      setVoteValue(1);
    } else {
      setVoteValue(-1);
    }
  };

  // clicking on the up arrow will display Green Button Upvote. It renders the Upward Arrow Icon
  const renderUpVote = () => {
    if (voteValue === 1) {
      return <TiArrowUpThick className="icon-action" />;
    }
    return <TiArrowUpOutline className="icon-action" />;
  };

  // clicking on the down arrow will display Red Button Downvote. It renders the Downward Arrow Icon
  const renderDownVote = () => {
    if (voteValue === -1) {
      return <TiArrowDownThick className="icon-action" />;
    }
    return <TiArrowDownOutline className="icon-action" />;
  };

  // getVoteType changes the font color between red or green for the number of vote values
  const getVoteType = () => {
    if (voteValue === 1) {
      return "up-vote";
    }
    if (voteValue === -1) {
      return "down-vote";
    }

    return "";
  };

  // If there is an error, return Error Loading comments and not the rest
  const renderComments = () => {
    if (errorComments) {
      return (
        <div>
          <h3>Error loading comments</h3>
        </div>
      );
    }

    return null;
  };
  return (
    <article key={id}>
      <Card>
        <div className="post-wrapper">
          <div className="post-votes-container">
            <button
              type="button"
              className={`icon-action-button up-vote ${
                voteValue === 1 && "active"
              }`}
              onClick={() => onHandleVote(1)}
              aria-label="Up vote"
            >
              {renderUpVote()}
            </button>
            <p className={`post-votes-value ${getVoteType()}`}>
              {shortenNumber(ups, 1)}
            </p>
            <button
              type="button"
              className={`icon-action-button down-vote ${
                voteValue === -1 && "active"
              }`}
              onClick={() => onHandleVote(-1)}
              aria-label="Down vote"
            >
              {renderDownVote()}
            </button>
          </div>
          <div className="post-container">
            <h3 className="post-title">{title}</h3>

            <div className="post-image-container">
              <img src={url} alt="" className="post-image" />
            </div>

            <div className="post-details">
              <span className="author-details">
                <span className="author-username">{author}</span>
              </span>
              <span>{moment.unix(time).fromNow()}</span>
              <span className="post-comments-container">
                <button
                  type="button"
                  className={`icon-action-button ${
                    showingComments && "showing-comments"
                  }`}
                  onClick={() => onToggleComments(permalink)}
                  aria-label="Show comments"
                >
                  <TiMessage className="icon-action" />
                </button>
                {shortenNumber(numComments, 1)}
              </span>
            </div>
            {postItem.showingComments ? (
              postItem.comments.map((item) => {
                console.log(item);
                return (
                  <Comment
                    author={item.author}
                    post={item}
                    comment={item.body}
                    key={item.id}
                    body={item.body}
                    time={item.created_utc}
                  />
                );
              })
            ) : (
              <p></p>
            )}
            {renderComments()}
          </div>
        </div>
      </Card>
    </article>
  );
}
