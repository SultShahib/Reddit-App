import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { subredditActions } from "../store/subredditSlice";
import { getSubreddits } from "../store/subredditApi";
import Card from "../components/card/card";
import "./subreddit.css";

export default function SubredditSection() {
  const dispatch = useDispatch();
  const subreddits = useSelector((state) => state.getSubreddit.subreddits);
  const selectSubreddit = useSelector(
    (state) => state.subreddit.selectedSubreddit
  );

  useEffect(() => {
    dispatch(getSubreddits());
  }, [dispatch]);

  return (
    <Card className="subreddit-card">
      <h2>Subreddits</h2>
      <ul className="subreddits-list">
        {subreddits.map((subreddit) => {
          return (
            <li
              key={subreddit.id}
              className={`${
                selectSubreddit === subreddit.url && `selected-subreddit`
              }`}
            >
              <button
                type="button"
                onClick={() =>
                  dispatch(subredditActions.setSelectedSubreddit(subreddit.url))
                }
              >
                <img
                  src={
                    subreddit.icon_img ||
                    `https://api.adorable.io/avatars/25/${subreddit.display_name}`
                  }
                  alt={`${subreddit.display_name}`}
                  className="subreddit-icon"
                  style={{ border: `3px solid ${subreddit.primary_color}` }}
                />
                {subreddit.display_name}
              </button>
            </li>
          );
        })}
      </ul>
    </Card>
  );
}
