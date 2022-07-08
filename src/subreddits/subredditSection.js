import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createSelector } from "@reduxjs/toolkit";
import { subredditActions } from "../store/subredditSlice";
import { getSubreddits } from "../store/subredditApi";
import classes from "./subreddit.module.css";
import Card from "../components/card/card";

export default function SubredditSection() {
  const dispatch = useDispatch();
  const subreddits = useSelector((state) => state.getSubreddit.subreddits);
  const selectSubreddit = useSelector(
    (state) => state.subreddit.selectedSubreddit
  );

  //   console.log(subreddits);

  //   const selectFilteredPosts = createSelector(
  //     [selectPosts, selectSearchTerm],
  //     (posts, searchTerm) => {
  //       if (searchTerm !== "") {
  //         return posts.filter((post) =>
  //           post.title.toLowerCase().includes(searchTerm.toLowerCase())
  //         );
  //       }

  //       return posts;
  //     }
  //   );

  useEffect(() => {
    dispatch(getSubreddits());
  }, [dispatch]);

  return (
    <Card className={classes.subreddit_card}>
      <h2>Subreddits</h2>
      <ul className={classes.subreddits_list}>
        {subreddits.map((subreddit) => {
          console.log(subreddit);
          return (
            <li
              key={subreddit.id}
              className={`${
                selectSubreddit === subreddit.url && classes.selected_subreddit
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
                  className={classes.subreddit_icon}
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

// import React from "react";
// import classes from "./commentStyle.module.css";
// // import { useDispatch, useSelector } from "react-redux";
// // import { subredditActions } from "../../store/subredditSlice";
// // import { getSubredditComments } from "../../store/subredditApi";
// import ReactMarkdown from "react-markdown";
// import moment from "moment";

// export default function Comment({ author, post, comment, key, body, time }) {
//   return (
//     <div className={classes.comment}>
//       <div className={classes.comment_data}>
//         <p className={classes.comment_author}>{author}</p>
//         <p className={classes.comment_time}>{moment.unix(time).fromNow()}</p>
//       </div>
//       <p className={classes.comment_text}>{comment}</p>
//       <ReactMarkdown source={comment} />
//     </div>
//   );
// }
