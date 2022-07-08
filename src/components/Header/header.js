import React, { useState, useEffect } from "react";
import RedditLogo from "../../images/reddit-logo.webp";
// import classes from "./headerStyle.module.css";
import { useSelector, useDispatch } from "react-redux";
import { subredditActions } from "../../store/subredditSlice";
import { HiOutlineSearch } from "react-icons/hi";
import { FaReddit } from "react-icons/fa";
import "./header.css";

export default function Header() {
  const [searchTermLocal, setSearchTermLocal] = useState("");
  const searchTerm = useSelector((state) => state.subreddit.searchTerm);
  const dispatch = useDispatch();

  const onSearchTermChange = (e) => {
    setSearchTermLocal(e.target.value);
  };

  useEffect(() => {
    setSearchTermLocal(searchTerm);
  }, [searchTerm]);

  const onSearchTermSubmit = (e) => {
    e.preventDefault();
    dispatch(subredditActions.setSearchTerm(searchTermLocal));
  };
  return (
    <header>
      <div className="logo">
        {/* <img className="logo-icon" src={RedditLogo} alt="Reddit Main logo" /> */}
        <FaReddit className="logo-icon" />
        <p>Reddit</p>
      </div>
      <form className="search" onSubmit={onSearchTermSubmit}>
        <input
          type="text"
          placeholder="Search"
          value={searchTermLocal}
          onChange={onSearchTermChange}
          aria-label="Search posts"
        />
        <button type="submit" onClick={onSearchTermSubmit} aria-label="Search">
          <HiOutlineSearch />
        </button>
      </form>
    </header>
  );
}

// <div className={classes.top_header}>
//   <div className={classes.logoAndTitle}>
//     <img
//       className={classes.redditLogo}
//       src={RedditLogo}
//       alt="Reddit Main logo"
//     />
//     <p className={classes.reddit_logoTitle}>reddit</p>
//   </div>
//   <input className={classes.search} placeholder="Search Reddit" />
// </div>
