import React, { Fragment } from "react";
import RedditLogo from "../../images/reddit-logo.webp";
import classes from "./headerStyle.module.css";

export default function Post() {
  return (
    <div className={classes.top_header}>
      <div className={classes.logoAndTitle}>
        <img
          className={classes.redditLogo}
          src={RedditLogo}
          alt="Reddit Main logo"
        />
        <p className={classes.reddit_logoTitle}>reddit</p>
      </div>
      <input className={classes.search} placeholder="Search Reddit" />
    </div>
  );
}
